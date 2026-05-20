# Spinning Up a ServiceNow MID Server Without Docker Hub

The `moers/mid-server` image on Docker Hub is convenient, but what if you want to understand what's actually happening under the hood? Or what if you need to run a MID server on a machine without internet access to Docker Hub?

Turns out, ServiceNow publishes version-specific MID server container recipes directly from your instance. You just need to ask it what version it's running.

## The Secret: `mid.version`

Every ServiceNow instance stores its own MID server version as a system property:

```
GET /api/now/table/sys_properties?sysparm_query=name=mid.version
```

This returns something like:

```
mid-linux-container-recipe.2024-12-19_1707272914
```

Or on newer instances:

```
australia-02-11-2026__patch2-04-17-2026_04-29-2026_2044
```

Either way, the last `MM-DD-YYYY` pattern in that string is the build date, which tells you exactly where to download the matching container recipe from `install.service-now.com`.

## The Script

Here's a standalone shell script that does the whole thing — query your instance, download the recipe, build the Docker image, and start the MID server. This is adapted from [John Dahl's servicenow_mid_server_docker_setup_script](https://github.com/johndahl-now/servicenow_mid_server_docker_setup_script) with a few tweaks for broader version format support:

```bash
#!/usr/bin/env bash
set -euo pipefail

# Configuration — set these here or in a separate secrets.sh
mid_display_name="${mid_display_name:-aiinabox-mid}"
mid_server_name="${mid_server_name:-docker_mid_server}"
servicenow_instance="${servicenow_instance:-}"
mid_username="${mid_username:-}"
mid_password="${mid_password:-}"

# Load secrets from external file (if present)
if [[ -f ./secrets.sh ]]; then
  source ./secrets.sh
fi

# Validate required vars
if [[ -z "$servicenow_instance" ]]; then
  echo "ERROR: servicenow_instance is not set."
  exit 1
fi
if [[ -z "$mid_username" || -z "$mid_password" ]]; then
  echo "ERROR: mid_username and mid_password must be set."
  exit 1
fi

# Check prerequisites
for cmd in curl unzip docker; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "ERROR: '$cmd' not found."
    exit 1
  fi
done
if ! docker info &>/dev/null; then
  echo "ERROR: Cannot talk to Docker. Is it running and are you in the docker group?"
  exit 1
fi

# Stop existing container
if [[ -f docker-compose.yaml ]]; then
  echo "Shutting down existing container..."
  docker compose down 2>/dev/null || true
fi

# Get MID version from instance
echo "Querying $servicenow_instance for MID version..."
url="https://${servicenow_instance}.service-now.com/api/now/table/sys_properties?sysparm_query=name=mid.version&sysparm_fields=value&sysparm_limit=1"
response=$(curl -s "$url" --request GET \
  --header "Accept:application/json" \
  --user "${mid_username}:${mid_password}")

if echo "$response" | grep -q '"error"'; then
  echo "ERROR: API call failed. Check your credentials."
  echo "$response"
  exit 1
fi

# Extract version (no jq needed — use cut)
releasename=$(echo "$response" | cut -d'"' -f6)
echo "MID Server release: $releasename"

# Extract build date — finds the last MM-DD-YYYY in the string
# Handles both:
#   mid-linux-container-recipe.2024-12-19_1707272914
#   australia-02-11-2026__patch2-04-17-2026_04-29-2026_2044
build_date=$(echo "$releasename" | grep -oE '[0-9]{2}-[0-9]{2}-[0-9]{4}' | tail -1)
rel_month=$(echo "$build_date" | cut -d'-' -f1)
rel_day=$(echo "$build_date" | cut -d'-' -f2)
rel_year=$(echo "$build_date" | cut -d'-' -f3)

# Download the recipe
filename="mid-linux-container-recipe.${releasename}.linux.x86-64.zip"
recipe_url="https://install.service-now.com/glide/distribution/builds/package/app-signed/mid-linux-container-recipe/${rel_year}/${rel_month}/${rel_day}/${filename}"

echo "Downloading $filename ..."
curl -fSL "$recipe_url" -o "$filename"

mkdir -p ./recipe ./export
chmod 777 ./export
unzip -o "$filename" -d ./recipe

mid_server_version=$(echo "$filename" | cut -d'.' -f2)

# Build the Docker image
echo "Building image ${mid_server_name}:${mid_server_version} ..."
docker build --tag "${mid_server_name}:${mid_server_version}" ./recipe

# Clean up
rm -r ./recipe
rm -f "$filename"

# Create docker-compose.yaml and start
cat > docker-compose.yaml <<EOF
services:
  ${mid_server_name}:
    container_name: ${mid_server_name}
    image: ${mid_server_name}:${mid_server_version}
    restart: unless-stopped
    volumes:
      - ./export:/opt/snc_mid_server/agent/export
    environment:
      MID_INSTANCE_URL: "https://${servicenow_instance}.service-now.com/"
      MID_INSTANCE_USERNAME: "${mid_username}"
      MID_INSTANCE_PASSWORD: "${mid_password}"
      MID_SERVER_NAME: "${mid_display_name}"
EOF

echo "Starting MID server..."
docker compose up -d

echo "Done! Validate at: https://$servicenow_instance.service-now.com/mid_server_list.do"
```

## How It Works

1. **Query your instance** for the `mid.version` property
2. **Extract the build date** — the last `MM-DD-YYYY` pattern in the version string, works for any format
3. **Download the official recipe** from `install.service-now.com` for that exact build
4. **Build a Docker image** from the recipe
5. **Start it with Docker Compose**, mounting the export directory for file attachments

The beauty of this approach: you're getting the **exact** MID server build that matches your instance, directly from ServiceNow's distribution servers. No third-party Docker images, no version guesswork.

## Why This Matters

- **Air-gapped environments** — download the recipe once, bake it into your base image
- **Auditability** — you control exactly what gets built and run
- **No Docker Hub dependency** — everything comes from your instance or `install.service-now.com`
- **Version-locked** — your MID server always matches your instance version

## Usage

Create a `secrets.sh` file alongside the script:

```bash
servicenow_instance="dev383416"
mid_username="mid_user"
mid_password="your_password"
```

Then run:

```bash
chmod +x midserver.sh
./midserver.sh
```

The script will query your instance, download the matching recipe, build the Docker image, and start the MID server. Validate it in ServiceNow under **MID Servers** and you're done.
