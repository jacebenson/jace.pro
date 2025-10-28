---
title: Deploying a RedwoodJS site using BareMetal
description: Deploying a RedwoodJS site using BareMetal
date: '2024-08-14'
tags:
  - api
  - javascript
  - css
  - html
  - json
  - database
  - ai
  - troubleshooting
  - security
redirectFrom:
  - /deploying-a-redwoodjs-site-using-baremetal/
  - /p/2024-08-13-deploying-a-redwoodjs-site-using-baremetal/
---

# Setting Up a BareMetal RedwoodJS Site

I’m in the process of re-creating a site, [ai.ina.box](https://ai.ina.box), using [RedwoodJS](https://redwoodjs.com). My goal is to keep hosting costs low, so I’m deploying the site on a small Ubuntu server from [Vultr](https://vultr.com). During setup, I encountered several steps worth documenting for future reference.

Update: This was augmented after seeing [Esteban's BareMetal deployment cheat sheet](https://community.redwoodjs.com/t/baremetal-deployment-cheatsheet/7380).

## Set up DNS

Yes, this will take the longest so let's do this first, you'll just need the IP address and domain name.

You will need to adapt this set up to your DNS host's website.  Ultimately you need a DNS Record like so.

Replace `example.com` with your domain.
Replace `127.0.0.1` with your server's IP address

```
Type: A
Name: example.com
Value: 127.0.0.1
```

## Project Setup for BareMetal Deployment

1. Set up a Redwood Project (you probably have one already, but just in case)

```sh
yarn create redwood-app blog
# git init, and yarn install as an option
```

2. Run the setup command
   This command creates two files: `deploy.toml` and `ecosystem.toml`.

```bash
yarn rw setup deploy baremetal
```

2. Update your local `.env` file
   Next, you’ll need your server’s authentication details. Store the username, password, and IP address in your .env file:

```sh
# local .env
SSH_AUTH_SOCK="pageant" # I had to add this
DATABASE_URL=file:./dev.db # point this to your local db, on the server it'll be different
DEPLOY_HOST=131.214.523.124
DEPLOY_USERNAME=deploy
DEPLOY_PASSWORD=somepass

# DB Auth setting for local dev
SESSION_SECRET=thisIsAFakeSecretGenerateOneOnYourOwn
```

2. Update your local `.env.defaults` file
   I'm not sure why, but I had to set up my local env.defaults as well to have at least my `DEPLOY_HOST`

```sh
DOMAIN=news.example.com
SESSION_SECRET=thisIsAFakeSecretGenerateOneOnYourOwn
SSH_AUTH_SOCK="pageant"
PORT="8910"
# set this to the local path where you want to save your db
DATABASE_URL="file:/var/www/app/dev.db"
# set these to enable deployment
DEPLOY_HOST=news.example.com
```


3. Update the `deploy.toml`
   You'll want to set up the host, username, password, and repo values.  Add the `[after]` section and update the `processNames`].
   We'll come back to the commented `restart` command after our first deploy.

```shell
[[production.servers]]
# Update the host, user, and password
host = "${DEPLOY_HOST}"
username = "${DEPLOY_USERNAME}"
password = "${DEPLOY_PASSWORD}" # THIS LINE NEEDS TO BE ADDED DO NOT MISS THIS LINE
agentForward = false # THIS LINE NEEDS TO SET TO FALSE TO USE USER/PASS
sides = ["api", "web"]
packageManagerCommand = "yarn"
monitorCommand = "pm2"
path = "/var/www/app"
processNames = ["api"]
# Update the repo
repo = "git@github.com:org/project-name-goes-here.git"
branch = "main"
keepReleases = 3

[after]
install = ["yarn rw prisma generate"]
build = ["yarn rw build web"]
#restart = ["pm2 restart job"]
```

4. Let's get this up on GitHub

Go to the [New Repository](https://github.com/new) page and make it.

```sh
git remote add origin git@github.com:username/repo.git
git add .
git commit -m "Inital Deploy Commit"
git push --set-upstream origin main
```

## Sever Setup

You'll need to connect to the server here.

```sh
ssh root@host
```

### Preparing Your Server

You're have an IP address and a root username and password. Great! Let's prep the machine.

1. Update the server

```sh
sudo apt update -y
sudo apt upgrade -y
```

2. Upgrade the server

```sh
sudo apt full-upgrade -y
```

3. Remove the fluff

```sh
sudo apt --purge autoremove -y
```

4. Upgrade to the new release version

```sh
sudo do-release-upgrade
```

### Create a new `sudo` user

The user I've picked here is `deploy` but use another if you want.

1. Create and grant privileges

```sh
adduser deploy --gecos "" # creates the user and skips extra questions
usermod -aG sudo deploy # gives the user sudo privledges
```

2. Give `sudoers` access to [allow you to run as another](https://www.maketecheasier.com/edit-sudoers-file-linux/) Add the user to the `sudoers` file by running `visudo` and adding the following line below the root equivalent:

```sh
deploy ALL=(ALL:ALL) ALL
```

### Log in as deploy user

```sh
exit
ssh deploy@host
```

### Set up SSH for deployments

1. Generate an SSH key for the server

   Note: Your email may be masked, go to [Account > Emails](https://github.com/settings/emails) and use the masked email if you do that.
   Accept the defaults here, at least for *where* to save it.

```sh
ssh-keygen -t ed25519 -C "123456+examplename@users.noreply.github.com"
```

2. Add the SSH key to the `ssh-agent`

```sh
eval "$(ssh-agent -s)"
```

4. Add the SSH key to GitHub by running

```sh
cat ~/.ssh/id_ed25519.pub
```

Then, paste the output into [new GitHub's SSH key](https://github.com/settings/ssh/new) settings.
I name mine "domain's deploy key"

5. Add GitHub’s fingerprint by running

```sh
ssh -T git@github.com
```

### Install NVM, Node, Yarn, Nginx, sqlite

1. Install Nginx and sqlite

```sh
sudo apt install nginx sqlite3 -y
```

2. Install Node.js via `nvm`

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install v20.16.0
```

3. Install Yarn

```sh
corepack enable
yarn init -2
sudo chown deploy:deploy /home/deploy/.yarn/berry # I got errors and had to do this eventually
```

1. Install PM2:

```sh
npm install pm2 -g
```

### Configure Nginx for Your Site

1. Create the directory specified in `deploy.toml`

```sh
sudo mkdir -p /var/www/app
sudo chown deploy:deploy /var/www/app
sudo chmod -R 755 /var/www/app
```

2. Create the `.env` file

```sh
sudo touch
sudo nano /var/www/app/.env
chown deploy:deploy /var/www/app/.env
```

Add the following content

```
WEB_PORT=80
API_PORT=8911
SSH_AUTH_SOCK="pageant"
PORT="8910"

PRISMA_HIDE_UPDATE_MESSAGE=true
# LOG_LEVEL=debug

DOMAIN=news.example.com
SESSION_SECRET=SomeSecretGoesHereButICantShareIt
# set this to the local path where you want to save your db
DATABASE_URL="file:/var/www/app/dev.db"
```

3. Edit the NGINX configuration

`alt-k` will set a mark, then you can use the arrows to highlight all and `ctrl-x` to cut it.

```sh
sudo nano /etc/nginx/sites-available/default
```

4. Configure Nginx Replace the default content with the following config. Replace **your_domain.com**

```nginx
upstream redwood_server {
  server 127.0.0.1:8911 fail_timeout=0;
}

server {
  listen 443 ssl;
  server_name news.example.com;

  root /var/www/app/current/web/dist;
  index index.html;

  gzip on;
  gzip_min_length 1000;
  gzip_types application/json text/css application/javascript application/x-javascript;

  sendfile on;
  keepalive_timeout 65;

  error_page 404 /404.html;
  error_page 500 /500.html;

  location / {
    try_files $uri /200.html =404;
  }

  location ^~ /static/ {
    gzip_static on;
    expires max;
    add_header Cache-Control public;
  }

  location ~ /.redwood/functions(.*) {
    rewrite ^/.redwood/functions(.*) $1 break;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_pass http://redwood_server;
  }

}
```

### Set up firewall

1. Install UFW (uncomplicated Firewall)

```sh
sudo apt install ufw -y
```

2. Allow SSH connections

```sh
sudo ufw allow ssh
```

3. Allow incoming HTTP and HTTPS traffic

```sh
sudo ufw allow 'Nginx Full'
```

4. Enable the firewall

```sh
sudo ufw enable
```

5. Check firewall status

```sh
sudo ufw status
```

It should look something like this;

```sh
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
Nginx Full                 ALLOW       Anywhere
22/tcp (v6)                ALLOW       Anywhere (v6)
Nginx Full (v6)            ALLOW       Anywhere (v6)
```

### Add Let's Encrypt for HTTPS

Modify this block to use your domain name, if it's a apex domain (e.g. example.com) keep the double `-d` option.

```sh
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d example.com -d www.example.com
#sudo certbot --nginx -d test.example.com
sudo systemctl status certbot.timer
sudo certbot renew --dry-run
```

### Updating `.bashrc`

Some distributions may have restrictions that interfere with non-interactive sessions. You may need to update `.bashrc` to handle this.

1. Edit `~/.bashrc`

```sh
nano ~/.bashrc
```

2. Comment this set of lines out, should be near the top

```sh
# case $- in
#   *i*) ;;
#     *) return;;
# esac
```

## Deploying!

You should be all set to do the first run deploy.  So go back to your local machine and run this.

```sh
yarn rw deploy baremetal production --first-run
```

Now if you're having trouble here it might because of authentication issues.
I had to update `deploy.toml` settings and double check them.  

`agentForward` to false
`password` to `"${DEPLOY_PASSWORD}"`

Amazing one last thing.

## Setting up Jobs

Update your `ecosystem.config.js` to something like this.

```js
module.exports = {
  apps: [
    {
      name: 'api',
      cwd: 'current',
      script: 'node_modules/.bin/rw',
      args: 'serve api',
      instances: 'max',
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 10000,
    },
    {
      name: 'job',
      cwd: 'current',
      script: 'node_modules/.bin/rw-jobs-worker',
      args: '--index=0 --id=0',
      instances: 1,
    },
  ],
}
```

Do a deploy `yarn rw deploy baremetal production`

Then, ssh on to the machine and run the following.

```sh
cd /var/www/app
pm2 stop all
pm2 start current/ecosystem.config.js
pm2 save
pm2 startup
# run the command it gives you
```

To get this to restart the job now add this to your `deploy.toml` file.

```sh
[after]
#...
restart = ["pm2 restart job"]
```

Go ahead and commit, push and then run `yarn rw deploy baremetal production`

## Troubleshooting

Log in with the `deploy` user to get access to yarn

If you get a database error, you may need to clean up your records before deploy, so include a script to do that or manually plan to purge those record individually or by dropping your database (after a backup of course)

### Background Jobs are not running

Check if the `job` process is running in `pm2`.  Running the following will show you what is running and it's memory usage.

```sh
pm2 monit
```

If `api` isn't listed, you need to start the `api` process and save it

```sh
pm2 start --name api "yarn rw serve api"
pm2 save
```

If `jobs` isn't listed, you need to start the jobs process and save it

```sh
pm2 start --name job "yarn rw-jobs-worker --index=0 --id=0"
pm2 save
```

### Running out of space was an issue