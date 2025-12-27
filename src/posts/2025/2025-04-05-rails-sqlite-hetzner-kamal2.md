---
title: Rails, sqlite, Hetzner, Kamal2
description: "You'll need a few things to get started here.\r\n\r\n1. A docker registry (I'm using hub.docker.com) with an access token\r\n2. A SSH Key\r\n3. A server (I'm using H..."
date: '2025-04-05'
tags:
  - ruby-on-rails
redirectFrom:
  - /rails-sqlite-hetzner-kamal2/
  - /p/2025-04-05-rails-sqlite-hetzner-kamal2/
---

You'll need a few things to get started here.

1. A docker registry (I'm using [hub.docker.com](http://hub.docker.com?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2)) with an [access token](https://app.docker.com/settings/personal-access-tokens?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2)
2. A [SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2)
3. A server (I'm using [Hetzner](https://console.hetzner.cloud/?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2)) with a SSH Key
4. A folder on the server where we'll store our sqlite and other storage stuff.
5. [dovenvx](https://dotenvx.com/docs/install?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2) to allow us to set up the secrets and environment variables easily.is a work in progress and isn't complete.

## Table of Contents

- [1. Getting Started](#1-getting-started)
  - [1.1. Installing Ruby on Rails](#11-installing-ruby-on-rails)
  - [1.2 Setting up your Rails app](#12-setting-up-your-rails-app)
  - [1.3. Creating a home page](#13-creating-a-home-page)
  - [1.4. Cleaning up the application styles](#14-cleaning-up-the-application-styles)
  - [1.5. Replacing the Home page content](#15-replacing-the-home-page-content)
  - [1.6. Setting up User Login with Devise](#16-setting-up-user-login-with-devise)
  - [1.7. Making the Navbar stick to the top](#17-making-the-navbar-stick-to-the-top)
  - [1.8. Adding a dashboard after login](#18-adding-a-dashboard-after-login)
  - [1.9. Hiding Login and Register for logged in users](#19-hiding-login-and-register-for-logged-in-users)
- [2. Deploying](#2-deploying)
  - [2.1. Getting the things ready](#21-getting-the-things-ready)
  - [deploy.yml - setting the things up](#deployyml-setting-the-things-up)
  - [Installing Kamal](#installing-kamal)
  - [Configuring the deploy.yml](#configuring-the-deployyml)
    - [service](#service)
    - [image](#image)
    - [servers](#servers)
    - [proxy](#proxy)
    - [registry](#registry)
    - [env](#env)
  - [Setting up .env](#setting-up-env)
  - [Running kamal setup](#running-kamal-setup)
  - [Setting up a path for sqlite](#setting-up-a-path-for-sqlite)
  - [Testing over http on the ip address](#testing-over-http-on-the-ip-address)
  - [Adding a domain and SSL](#adding-a-domain-and-ssl)
- [Useful resources](#useful-resources)

Okay, so I'm learning Ruby on Rails. I'm looking forward to working on something that doesn't constantly shift and has been out there for quite a while. I also love the idea of all the generators.

That being said, if you're working on rails app and you deploy there's always a number of steps here. I'm going to try to spell out everything I did from the getting started page on ruby on rails to the kamal deploy comand.

Let's get into it.

## 1. Getting Started

I started the [Getting Started tutorial](https://guides.rubyonrails.org/getting_started.html?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2) this week. I however hit some snags. So we're going to skip it and follow what Indigo Tech Tutorials published. There's a few prerequisites we got to meet first.

### 1.1. Installing Ruby on Rails

[They have a page here](https://guides.rubyonrails.org/install_ruby_on_rails.html?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2), for my set up (building on Windows) Here's my notes.

1. Install WSL for Ubuntu
    `wsl --install --distribution Ubuntu-24.04`
2. Open it up, create a user, and password you will remember.
3. Install a few things

```sh
    # install the packages needed
    sudo apt install build-essential rustc libssl-dev
    sudo apt install libyaml-dev zlib1g-dev libgmp-dev
    # get mise to install ruby on rails 3
    curl https://mise.run | sh
    echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc
    source ~/.bashrc
    # install ruby
    mise use -g ruby@3
    # verify ruby
    ruby --version
    # install rails
    gem install rails
    # verify rails
    rails --version
```

### 1.2 Setting up your Rails app

You should be on your terminal in WSL.

Let's make a new project we'll call it `rubystore` with Tailwind.

```sh
    rails new rubystore -c tailwind
    # this will build the project out
    cd rubystore
    code . #open in vs code
```

I press the `` ctrl+` `` to open the terminal in the editor.

### 1.3. Creating a home page

Now let's set up the controller

```sh
    rails g controller pages home
```

You'll want to edit the `config/routes.rb` file to match this.

```ruby
    Rails.application.routes.draw do
      # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
      # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
      # Can be used by load balancers and uptime monitors to verify that the app is live.
      get "up" => "rails/health#show", as: :rails_health_check
      # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
      # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
      # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
      # Defines the root path route ("/")
      root "pages#home"
    end
```

At anytime you can test this by running `bin/dev`. Let's do that and ensure you get the page was generated page.

### 1.4. Cleaning up the application styles

Open the `/views/layouts/application.html.erb` and let's remove the classes on the `` element.

### 1.5. Replacing the Home page content

Open the `/views/pages/home.html.erb`, and look for a landing page template with tailwind, searching for free tailwind css components will find you some sites. I found this one called [Landing Page by zoltanszogyenyi](https://www.creative-tim.com/twcomponents/component/tailwind-landing-page?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2).

Copy the code and past it in that file. Run you server and check it out.

### 1.6. Setting up User Login with Devise

On the terminal add the devise and tailwind devise gems, and the user model and migrate that to the database.

```sh
    bundle add devise tailwind_devise
    rails g devise:install
    rails g tailwind_devise:views
    rails g devise User
    rails db:migrate
```

Open the `/views/pages/home.html.erb` and find the register and login links.

Update them with the following.

Login link should use the following `hrefs` 

    [Register](<%= new_user_registration_path %>)
    [Login](<%= new_user_session_path %>)

### 1.7. Making the Navbar stick to the top

First let's edit the `/views/layouts/application.html.erb` by adding this in in the body tag.

    <%= render "layouts/navbar" %>

Find the header html content and cut it from the `/views/pages/home.html.erb`, and paste it into a new partial file `/views/layouts/_navbar.html.erb` 

You can test this out by registering. You won't notice anything different after logging in. Let's fix that.

### 1.8. Adding a dashboard after login

We're going to create a new controller definition in `/controllers/pages_controller.rb` It should look like this.

```ruby
    class PagesController < ApplicationController
      def home
      end
      def dashboard
      end
    end
```

We need to now tell the routes to handle authenticated users by adding this authenticated logic.

```
    Rails.application.routes.draw do
      devise_for :users
      get "pages/home"
      # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
      # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
      # Can be used by load balancers and uptime monitors to verify that the app is live.
      get "up" => "rails/health#show", as: :rails_health_check
      authenticated :user do
        root "pages#dashboard", as: :authenticated_user_root
      end
      # Defines the root path route ("/")
      root "pages#home"
    end
```

Lastly, before you can test this, you'll need a dashboard page. Create one at `/views/pages/dashboard.html.erb`. Like before find a tailwind component that makes sense. I'm using [Dark Dashboard Example by pantazisoftware](https://www.creative-tim.com/twcomponents/component/dashboard-example?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2).

Okay now the login and register loads and lands on the dashboard.

### 1.9. Hiding Login and Register for logged in users

Edit the `/views/layouts/_navbar.html.erb` partial.

We're going to wrap those links we modified above with this snippet.

```erb
<% if current_user %>
    <a
        href="<%= destroy_user_session_path %>" 
        data-turbo-method="delete"
        class="...">
        Log out
    </a>
<% else %>
    <!--your links here-->
<% end %
```

Now that it's all set up. Try it out and when you're ready let's deploy it.

## 2. Deploying

### 2.1. Getting the things ready

You'll need a few things to get started here.

1. A docker registry (I'm using [hub.docker.com](http://hub.docker.com?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2)) with an [access token](https://app.docker.com/settings/personal-access-tokens?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2)

2. A [SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2)

3. A server (I'm using [Hetzner](https://console.hetzner.cloud/?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2)) with a SSH Key

4. A folder on the server where we'll store our sqlite and other storage stuff.

5. [dotenvx](https://dotenvx.com/docs/install?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2) to allow us to set up the secrets and environment variables easily.

### deploy.yml - setting the things up

There's a lot in this file, I'm just going to paste my uncommented version, you can read more on it on [the official Kamal Configuration page](https://kamal-deploy.org/docs/configuration/overview/?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2).

### Installing Kamal

On the terminal install kamal, then initialize it for the current project.

```sh
    gem install kamal
    kamal init # this may throw a message that Config already exists
    # that's okay.
```

### Setting up SSH access to your server

Before you can deploy, you need passwordless SSH access to your server.

<details>
<summary><strong>Can't login with SSH? Click here for setup instructions</strong></summary>

**Step 1: Copy your SSH key to the server**

```sh
ssh-copy-id root@YOUR_SERVER_IP
```

Enter the root password when prompted. This installs your public key on the server.

**Step 2: Test SSH access**

```sh
ssh root@YOUR_SERVER_IP "echo success"
```

If you see "success" without entering a password, you're ready to deploy!

**Troubleshooting:**

If `ssh-copy-id` doesn't work, you can manually copy your key:

```sh
# Display your public key
cat ~/.ssh/id_ed25519.pub

# SSH into server
ssh root@YOUR_SERVER_IP

# On the server, add your key
mkdir -p ~/.ssh
echo "PASTE_YOUR_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
exit

# Test it worked
ssh root@YOUR_SERVER_IP "echo success"
```

</details>

### Configuring the deploy.yml

I want to lay out all the things you'll need for this, but there's a bunch. Instead I'm going to address each configuration.

#### service

The service is the name of your application. I'm going to just call mine rubystore

#### image

This is the docker image. You'll need a docker registry to do this. I'm using dockerhub. You'll need to [create an access token on docker hub](https://app.docker.com/settings/personal-access-tokens?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2). Make sure it has **read** and **write** permissions. You can use another registry, I'm not going to set that up. This value should be you're username/repo. Put this in the `.env` file (create it if it doesn't exist). You should have something like this

    KAMAL_REGISTRY_PASSWORD=your_key_goeshere12345

#### servers

Here we need the IP address of the server we're going to deploy to. Spin up a machine on [Hetzner](https://console.hetzner.cloud/?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2) that is running Ubuntu and at least 1 GB of ram. Copy that IP address here.

#### proxy

Initially we're going to skip this so comment this block out. You can do that by prepending a `#` for each line here.

#### registry

Kamal uses docker hub by default, we are also going to use that. Set the username here. This block lets you connect to different registries.

#### env

The env block defines what environment variable get passed as secret or as clear text. Here we're just going to pass the secret of `RAILS_MASTER_KEY`. To send that the secrets for Ruby is odd to me yet. You'll need edit the `./kamal/secret` and add `RAILS_MASTER_KEY=$RAILS_MASTER_KEY`. I'll write a little more about this for the kamal commands later.

### Setting up .env

Now Kamal needs access to the KAMAL_REGISTRY_PASSWORD and RAILS_MASTER_KEY. Create a `.env` file and put those in there. Getting your master key is as easy as opening `./config/master.key`. If you don't have a file there run `rails credientals:edit` and then just exit using `:q`. Now you will have that `master.key` file.

```
    KAMAL_REGISTRY_PASSWORD=dckr_pat_asdf
    RAILS_MASTER_KEY=asdfasdfasdf
```

### Running kamal setup

Running kamal setup needs some details available to it. To set these we'll just prepend the command with these environment variables. Kamal also needs to be on a machine that can connect to the server. That means setting up ssh on that server and this one, or typing in the ssh password.

```sh
KAMAL_REGISTRY_PASSWORD=dckr_pat_asdf RAILS_MASTER_KEY=asdfasdfasdf kamal setup
```

A note, on windows you need to have docker desktop installed and integrated with the ubuntu wsl you are running. [Microsoft WSL Docker page](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2) has some instructions on this.

```sh
kamal setup
```

Sometimes I get an error running this

```sh
INFO [fd944dda] Running docker login -u [REDACTED] -p [REDACTED] as jace@localhost
ERROR (SSHKit::Command::Failed): docker exit status: 32000
```

If you get this, your `.env` or `.kamal/secrets` file probably isn't working properly. I found that I can run `kamal secrets print` to see what secrets are available to kamal. This is great for debugging.

I ended up install dotenvx to correct this.

```sh
curl -sfS https://dotenvx.sh | sudo sh
```

Then updated the secrets file (`.kamal/secrets`) to use dotenvx for both secrets:

```sh
# Grab the registry password from ENV
KAMAL_REGISTRY_PASSWORD=$(dotenvx get KAMAL_REGISTRY_PASSWORD --quiet -f .env)

# Grab the Rails master key from ENV
RAILS_MASTER_KEY=$(dotenvx get RAILS_MASTER_KEY --quiet -f .env)
```

**Tip:** You can verify secrets are loading correctly with `kamal secrets print`.

This just worked for me! Sweet. However, when I try to register, I don't get logged in.

### Setting up a path for sqlite

[Erik Minkel wrote a piece](https://www.erikminkel.com/2024/01/04/deploy-an-app-kamal-sqlite-activestorage/?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2) on how he set's this up so the sqlite file doesn't get destroyed on every deploy.

We're going to copy his lead.

#### Option 1: Automatic setup with Kamal hooks (Recommended)

Create a file at `.kamal/hooks/docker-setup` (no file extension):

```sh
#!/bin/sh

# This hook runs LOCALLY after Docker is installed on remote servers
# We need to SSH into each host to set up directories with proper permissions

echo "Setting up storage directories on remote servers..."

# Loop through all hosts (KAMAL_HOSTS is space-separated)
for host in $KAMAL_HOSTS; do
  echo "Setting up /storage on $host..."
  
  # SSH into the remote host and create the directory with proper permissions
  ssh "$host" "mkdir -p /storage && chown -R 1000:1000 /storage && chmod -R 755 /storage"
  
  if [ $? -eq 0 ]; then
    echo "✓ Successfully set up /storage on $host (UID 1000:1000)"
  else
    echo "✗ Failed to set up /storage on $host" >&2
    exit 1
  fi
done

echo "✓ All servers configured successfully"
```

Make it executable:

```sh
chmod +x .kamal/hooks/docker-setup
```

Now when you run `kamal setup`, this directory will be created automatically! You can skip to [editing deploy.yml](#edit-deployyml).

<details>
<summary><strong>Option 2: Manual setup (if you prefer)</strong></summary>

If you prefer to create directories manually, SSH into the server:

```sh
ssh root@yourserversipaddress
sudo mkdir /storage
sudo chown 1000:1000 /storage
```

**Why 1000:1000?** The Rails Dockerfile creates a `rails` user with UID 1000 and runs the application as that user for security. The mounted volume on the host must be owned by the same UID so the Rails app can read/write the SQLite database files.

Log off the server and edit the deploy.yml locally by adding

```yaml
    volumes:
      - "/storage:/rails/storage"
```

**Important:** Rails 8 expects the production database at `storage/production.sqlite3`, which becomes `/rails/storage/production.sqlite3` in the Docker container. The volume mount must point to `/rails/storage` to match this path. If you mount to `/rails/sqlite`, you'll get `SQLite3::CantOpenException: unable to open database file` errors.

Now let's add these changes to git, and redeploy.

```sh
    git add .
    git commit -m "added volumes"
    kamal deploy
```

</details>

### Testing over http on the ip address

Okay this is not where we want to leave things but I like to test things out.

To test out the site it should be up right now but if you try to auth, you'll have issues. That's because when signing up you get the following error on the console (visible by `kamal logs` )

If you search for `Processing by Devise::RegistrationsController#create` you'll find `ActionController::InvalidAuthenticityToken (HTTP Origin header (http://1.2.3.4) didn't match request.base_url (https://1.2.3.4))`

Okay, let get around that. In the `/config/environments/production.rb` there's an `config.force_ssh` which were going to change to false and a `config.assume_ssl` which we'll comment out.

Do another deploy, and success I'm able to register an account and log in on separate windows.

### Adding a domain and SSL

First part of this is configuring your Domain Name Server to point to your server.

**Verify DNS is working:**
```sh
dig +short your-domain.com
# Should return your server's IP address
```

Then undo what we did before.

1. Open `/config/environments/production.rb`
2. Update `config.force_ssl` to true
3. Uncomment `config.assume_ssl` 

```sh
    kamal proxy logs
    kamal proxy reboot 
```

**Verify SSL certificate:**
```sh
# Check HTTPS works
curl -I https://your-domain.com

# View certificate details
echo | openssl s_client -connect your-domain.com:443 -servername your-domain.com 2>/dev/null | openssl x509 -noout -subject -issuer -dates
# Should show "issuer=C=US, O=Let's Encrypt"
```

The SSL certificate from Let's Encrypt is automatically obtained and will auto-renew.

## Common Deployment Issues

Here are the most common issues you might encounter and how to fix them:

### SQLite3::CantOpenException: unable to open database file

**Symptoms:** Deployment fails with "target failed to become healthy" and logs show SQLite can't open database.

**Causes:**
1. Volume mount path doesn't match `config/database.yml` expectations
2. Incorrect permissions on `/storage` directory

**Fix:**
```sh
# On your local machine, verify deploy.yml has:
volumes:
  - "/storage:/rails/storage"  # Must be /rails/storage, not /rails/sqlite

# On the server, verify permissions:
ssh root@YOUR_SERVER_IP "chown -R 1000:1000 /storage && chmod -R 755 /storage"

# Redeploy:
kamal deploy
```

### docker exit status: 32000 - flag needs an argument: 'p'

**Symptoms:** `kamal setup` fails with Docker login error.

**Cause:** The `.kamal/secrets` file isn't extracting the password correctly from `.env`.

**Fix:**
Install dotenvx and update `.kamal/secrets`:
```sh
# Install dotenvx
curl -sfS https://dotenvx.sh | sudo sh

# Edit .kamal/secrets to use:
KAMAL_REGISTRY_PASSWORD=$(dotenvx get KAMAL_REGISTRY_PASSWORD --quiet -f .env)
RAILS_MASTER_KEY=$(dotenvx get RAILS_MASTER_KEY --quiet -f .env)

# Debug secrets with:
kamal secrets print
```

### Permission Denied Errors in Logs

**Symptoms:** Container starts but crashes with permission errors writing to database.

**Cause:** The `/storage` directory on the server isn't owned by UID 1000 (the `rails` user in the container).

**Fix:**
```sh
ssh root@YOUR_SERVER_IP
chown -R 1000:1000 /storage
chmod -R 755 /storage
exit

kamal deploy
```

### SSL Certificate Not Obtained

**Symptoms:** HTTPS doesn't work, `curl https://domain.com` shows SSL error.

**Check:**
1. DNS is pointing to server: `dig +short your-domain.com` (should return your server IP)
2. Ports 80 and 443 are open in firewall
3. No other service is using port 80/443

**Fix:**
```sh
# Check DNS first
dig +short your-domain.com

# If DNS is correct, restart proxy to retry Let's Encrypt:
kamal proxy reboot

# Check proxy logs:
kamal proxy logs
```

### Useful Kamal Commands

```sh
# View application logs
kamal logs
kamal logs -f  # Follow/tail logs

# Access Rails console
kamal app exec --interactive --reuse "bin/rails console"

# SSH into running container
kamal app exec --interactive --reuse "bash"

# Restart the application
kamal app restart

# Rollback to previous version
kamal rollback

# View deployment details
kamal app details
```

## Useful resources

I found "How To Deploy Rails 7 App With Kamal 2" by Indigo Tech Tutorials the most useful. He's able to offer help too for a fee on his site, [Indigo Tech Tutorials](https://indigotechtutorials.com/pricing?utm_source=jace.pro&utm_medium=referral&utm_campaign=rails-sqlite-hetzner-kamal2).

<iframe width="560" height="315" src="https://www.youtube.com/embed/TfortG9QKWU" title="Kamal Deployment: The Newest Form of Self-Torture | I'm Mary Poppins, y'all!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Kamal Deployment: The Newest Form of Self-Torture \| I'm Mary Poppins, y'all!

How to configure Kamal and avoid common deployment pitfalls

[<!-- External image: ![Kamal Deployment Image](https://alec-c4.com/posts/2025-04-02-kamal/index.png) -->](https://alec-c4.com/posts/2025-04-02-kamal)