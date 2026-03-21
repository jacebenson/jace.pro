---
title: 'Just use a VPS bro'
description: >-
  There's a video by Kai Lentit on setting up OpenClaw using a VPS.  It might just be him acting out the response of Claud Opus setting up a VPS, however he came up with it, it's a masterclass of setting up a VPS.
tags:
  - vps
  - server
date: '2026-03-20'
---

https://www.youtube.com/watch?v=40SnEd1RWUU&t=5s

I wanted to take a few minutes and detail out the steps Kai made making his video as they apply to .. .probably many things I've set up.

Let's get into it.

Continue.




"""
kai: I want to install Open Claw and set up my personal AI assistant.
ai: Just use a VPS. It's like a oneclick install. 
kai: Oh, I was just going to buy a Mac Mini. 
ai: No, you need to use a fresh Linux VPS.
ai: It's like what everybody does. 
kai: Continue.
ai: Okay, that was easy. Uh, let's start by splinning up a server on your cloud VPS provider. 
ai: You know, just a one vCPU, 4 GB RAM, 100GB drive. 
ai: Then you'll get a public IP and root SSH access. 
ai: Then immediately we're under attack. 
kai: I haven't even logged in yet.
ai: Yeah, SSH scam started 12  ago.
ai: Now it's a fight against time. Do not install anything before securing your VPS root SSH access. 
ai: So first we make sure we have the latest state of the internet on our VPS with apata update and apata upgrade. 
`sudo apt update && apt upgrade -y`
kai: Why?
ai: Our job is to keep our core running while other packages are changing theirs. 
kai: Why? 
ai: Then we'll install essential security and networking tools. 
ai: Apat curl apat wget ufw failtoban ca certificates gnoop g. 
`sudo apt install -y curl wget ufw fail2ban ca-certificates gnupg`
kai: Why weren't these installed by default?
ai: Well, that's because Linux was designed to be composable, transparent, minimal, scalable, and reusable in millions of environments. 
kai: And it was not designed to be secure. 
ai: Think about it. Secure for what? 
kai: Well, for a server. (ai didn't hear)
ai: See, you can't answer that question. 
kai: For a server! (ai didn't hear)
ai: Second, we create a non-root users with a strong password. Then we delete password access and create an SSH key instead.
```bash
sudo adduser claw
sudo usermod -aG sudo claw
```
ai: Then we delete password access and create an SSH key instead.
```bash 
# on your local machine 
ssh-keygen -t ed25519
# copy your key to the server 
ssh-copy-id claw@SERVER_IP 
```
kai: I cannot use the password I use everywhere. 
ai: No, we need to harden the SSH tunnel!
```ssh 
# /etc/ssh/sshd_config 
Port 2222
Protocol 2
PermitRootLogin no
PasswordAuthentication no
PubKeyAuthentication yes
ChallengeResponseAuthentication no
UsePAM yes
X11Forwarding no
AllowUsers claw
MaxAuthTries 3
LoginGraceTime 30
```
ai: Now, verify the SSH config before logging yourself out. 
`sudo ssh -t && sudo systemctl reload ssh`
Restart with the new config. 
`sudo systemctl restart ssh`
The log out log in with your SSH key again.
`ssh -p 2222 claw@SERVER_IP`
ai: You didn't save your SSH key. 
kai: I was supposed to be paying attention. 
ai: We start from scratch. (erases board)
ai: Next firewall.
ai: This is an elimination diet. We block everything and then slowly reintroduce what we really need. 
kai: And what do I need?
ai: Well, that depends. 
kai: Let's check what the tutorial says. 
ai: The tutorial won't mention it cuz I wrote that tutorial. 
ai: We block all unsolicited traffic from the **worldwide hostile web app**, but we leave one door open. 
`sudo ufw allow 2222/tcp`
ai: Port 2222.
ai: Then we activate the firewall.
kai: Why 4 twos?
ai: Oh, it's just an arbitrary number. You could choose any. 
kai: Six Seven.
ai: No! The standard for arbitrary numbers is 2222. 
ai: Then we autoban IPs that guess passwords. 
`sudo systemctl  enable --now fail2ban`
kai: I thought we don't use passwords.
ai: Well, that's today. But what about tomorrow? 
ai: Then we configure the SSH jail for our port. 
```bash
# /etc/fail2ban/jail.local 
[sshd]
enable = true 
port = 2222 
maxretry = 3 
bantime = 1h 
findtime = 10m
```
ai: Restart it, verify press `ls -la` a 100 times.
sudo systemctl restart fail2ban`
kai: And now I will not get hacked.
ai: No, I'm attacking it right now because it didn't enable automatic security updates and ensured the security origin is set. 
```bash
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```
ai: And ensured the security origin is set.
```bash
# /etc/apt/apt.conf.d/50unattended-upgrades 
"${distro_id}:${distro_codename}-security";
```
ai: Now, congrats. Your server can reboot itself at 3:00 a.m. 
ai: Now, let's do some basic OS sanity. 
ai: How what kind of working environment would this be without a properly set time and date?
```bash 
sudo timedatectl set-timezone UTC
sudo systemctl enable --now systemd-timesyncd
```
ai: Now let's control entropy. And now we get to the most interesting part.
kai: Install open clock. 
ai: Installing a private VPN mesh. 
```bash 
curl -fsSL https://tailscale.com/install.sh | sh 
sudo tailscale up 
```
kai: NordVPN.
ai: Tailscale. 
ai: Verify if the wormhole actually opens. 
```bash
sudo tailscale status
```
Now we allow SSH only support 2222 but package to our private VPN mesh. 
```bash
sudo ufw delete 2222/tcp
```
Public SSH is now gone. 
All public inbound traffic is now gone
Except future IP56 noise. 
So we disable I56 UFW and apply kernel settings.
```bash
sudo sed -i 's/IPV6=yes/IPV6=no/' /etc/default/ufw 
echo "net.ipv6.conf.all.disable_ipv6 = 1" | sudo tee -a /etc/sysctl.conf 
sudo sysctl -p 
sudo ufw reload 
```
3:57 No, just so we can sleep better. Reload. Verify.
4:02 So now we're already there to install the user package.
kai: This wasn't even the installation. 
ai: But for this first we need to install it dependency NodeJS. 
```bash 
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs 
node -v 
npm -v 
```
We never trust Node version distros. 
Install NodeJS from the official repo. Only then we install the user package directly from GitHub. 
But this of course doesn't work because we didn't install Git. 
```bash 
sudo apt install -y git 
```
Now verify the repo isn't compromised by trusting GitHub and 900 random npm dependencies.
```bash 
# MIGHT CHANGE WITH NEW APPLICATION 
curl -fsSL https://get.pnpm.io/install.sh | sh - 
git clone https://github.com/openclaw/openclaw.git 
cd openclaw 

pnpm install 
pnpm ui:build # auto-installs ui deps on first run 
pnpm build 

pnpm openclaw onboard --install-daemon 

# dev loop (auto-reload on ts changes)
pnpm gateway:watch 
```
ai: Meanwhile, we create a credentials directory because we don't dump production apps into home like crazy people. 
```bash
sudo mkdir -p /opt/openclaw
sudo chown claw:claw /opt/openclaw

sudo nano /etc/openclaw.env 
sudo chown root:claw /etc/openclaw.env 
sudo chmod 640 /etc/openclaw.env 
```

ai: Then we fix the directories permissions. 
kai: Why are they broken?
ai: Broken is the def facto standard. 
ai: Now start, restart and verify the user package.
kai: With status. 
ai: No, with `doctor`.
```bash 
openclaw doctor 
```
ai: And now!
kai: we are done. 
ai: We configure the systemd service so if it breaks it doesn't crash. You know, system D is a
5:03 controversial idea that hasn't been recognized widely in the Linux community because initially it start as an init system. Then it become a schedule, a
5:10 debugger, a login manager, a device manager, a process manager. So if it crashes, basically everything crashes.
5:17 But since 2015, basically every major Linux distribution has decided for this argument in 2015 and uh we lost. But there are still people who use our
5:26 units, you know, OP Marcy or S6, but you know, we don't talk to these people. But for now, system B is an optimal but you
5:33 know nonoptimal solution. Do you have anything to say? 
```bash
# /etc/systemd/system/openclaw.service 
[Unit]
Description=OpenClaw Bot 
After=network.target 

[Service]
Type=simple 
User=claw 
Group=claw 
EnvironmentFile=/etc/openclaw.env 
WorkingDirectory=/opt/openclaw 
ExecStart=/usr/bin/node index.js 
Restart=on-failure
RestartSec=5 
NoNewPriviledges=true 
PrivateTmp=true 
ProtectSystem=full 
ProtectHome=true 
LimitNOFILE=4096 

[Install]
WantedBy=multi-user.target 
```
kai: Okay. 
ai: So we create this small unit file. Activate and reactivate the service. 
```bash
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable openclaw 
sudo systemctl start openclaw 
sudo systemctl status openclaw 
```
ai: Now make sure we're logging everything to observe runtime behavior. Disk protection. Backups. 
kai: Backups. And then run your application security audit if it has one.
```bash
openclaw security audit --deep 
```
ai: I love it. 
kai: I thought we did security already.
ai: No, no, you don't do security. Security needs to live rent free in your mind at all times. And now you have the setup with no public SSH, no public web ports, and server only reachable via tail scale. 98.1% uptime if you ignore the weekly kernel panics.
kai: And this was simple.
ai: Yes, this was the Ubuntu version. Now I can show you how you would do this on Arch by the way. No, no, no. Thank you.
ai: But now we're ready. Well, now you'd start configuring the application security measures so it doesn't start deleting your Gmail, leak your Ethereum wallet, and start joining online calls if somebody messages bendable and commands to your Telegram bot. 
kai: What VPS are you running it on?
ai: Oh, I'm just running it on an isolated bank Mini. What? Oh, I didn't say you should follow as I do. 
kai: Claude, give me a new agent. I don't like this agent. Give me a new agent. 
ai: We didn't even get to talk about how to install gentle from source yet.
kai: A lying agent. Please install open claw simply so I can make automated fully market bets. Make no mistakes. 
ai: Ah, this is no problem with AWS EC2 instance. But first, we need to make sure to properly set up security groups and network access control list. Have you heard about Kubernetes? 
ai: No, no problem. I will teach you.
kai: This video was sponsored by every service that is trying to make you run OpenClaw on their servers. They are the world's leading provider for that.
