---
title: 'Turn an Old Chromebook into a Coolify Server with Lubuntu'
description: >-
  Got an old Chromebook gathering dust? Here's how I converted mine into a lightweight server managed by Coolify, using Lubuntu and Tailscale.
tags:
  - coolify
  - chromebook
  - lubuntu
  - tailscale
  - homelab
date: '2026-02-22'
---

I had an old Acer Chromebook CB3-431 sitting around - 4GB RAM, 32GB eMMC storage. Not much, but enough to run a lightweight server. Here's how I turned it into a Coolify-managed server.

## The Hardware

- Acer Chromebook CB3-431 (Intel Braswell, board name: EDGAR)
- 4GB RAM
- 32GB internal storage
- No ethernet port (WiFi only)

## Why Lubuntu?

I initially tried Ubuntu Server and a few other distros, but ran into a frustrating problem: **no WiFi support during installation**. The CB3-431 has no ethernet port, and my USB ethernet adapter wasn't detected. Most server distros assume you have wired networking.

I also tried antiX, but configuring WiFi manually was painful. Lubuntu worked because it has a full desktop with NetworkManager - just click the WiFi icon and connect. Once installed, you can run it headless as a server.

## Step 1: Remove the Write Protect Screw

Unlike most laptops, Chromebooks have firmware write protection that prevents you from installing alternative operating systems. To flash custom firmware, you need to disable this protection first.

For the CB3-431 (EDGAR), this means removing a physical screw inside the laptop:

![Write protect screw location for EDGAR](/assets/images/Edgar_wp.jpg)

1. Power off the Chromebook and disconnect the charger
2. Remove the bottom cover screws
3. Locate and remove the write protect screw (see image above)
4. Reassemble the device

The screw doesn't need to go back in - you can toss it.

For other Chromebook models, check the [MrChromebox Supported Devices](https://docs.mrchromebox.tech/docs/supported-devices.html) page to find your device's write protect method.

## Step 2: Enable Developer Mode

1. Turn off the Chromebook
2. Hold `Esc + Refresh + Power` to enter Recovery Mode
3. Press `Ctrl + D` when prompted
4. Follow the prompts to enable Developer Mode

This wipes the device, so back up anything important first.

## Step 3: Flash UEFI Firmware

Since this device is older (marked as EOL), dual-booting ChromeOS and Linux isn't an option - you have to fully replace the OS. That's fine for a server anyway.

Boot into ChromeOS, then open a terminal with `Ctrl + Alt + F2` and login as `chronos`. Run the MrChromebox firmware utility:

```bash
cd; curl -LOf https://mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh
```

Select option 2: **"Install/Update UEFI (Full ROM) Firmware"**

**Important:** When prompted, create a backup of your stock firmware and save it somewhere safe. You'll need this if you ever want to restore ChromeOS.

After flashing, power off the device completely.

For full details, see the [MrChromebox Getting Started guide](https://docs.mrchromebox.tech/docs/getting-started.html).

## Step 4: Create a Bootable USB

On another Linux machine, download Lubuntu and create a bootable USB:

```bash
sudo dd if=~/Downloads/lubuntu-25.10-desktop-amd64.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Replace `/dev/sdX` with your USB device. Use `lsblk` to find the right one - look for the device matching your USB drive's size.

## Step 5: Install Lubuntu

1. Insert the USB into the Chromebook
2. Power on - it should boot directly from USB with the new UEFI firmware
3. Connect to WiFi using the desktop network manager
4. Run the installer

If you see "Erase disk and install Lubuntu" - use that, it's the easiest. If forced to manual partition and you see old ChromeOS partitions, wipe the disk first:

```bash
sudo parted /dev/mmcblk0 mklabel gpt
```

Then close and reopen the installer - the "Erase disk" option should appear.

For the swap option, I chose "no swap" to save space on the 32GB drive.

## Step 6: Set Up SSH Access

Once Lubuntu is installed, set up SSH so you can manage it remotely:

```bash
sudo apt update
sudo apt install openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh
```

Set a memorable hostname:

```bash
sudo hostnamectl set-hostname cb3-431
```

From your main machine, copy your SSH key:

```bash
ssh-copy-id jace@192.168.1.136
```

Now you can SSH in with `ssh jace@cb3-431.local`.

## Step 7: Install Tailscale

Since my Coolify server is on a different network, I needed Tailscale to connect them:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

Follow the authentication URL to link it to your Tailscale account. Note the Tailscale IP (something like `100.x.x.x`).

## Step 8: Connect to Coolify

In Coolify, add a new server:

1. Go to **Servers** → **Add Server**
2. Enter the Tailscale IP as the hostname
3. Set the SSH user (e.g., `jace`)
4. Create or select an SSH key

For the SSH key, I generated a fresh one and added it to the Chromebook:

```bash
# On your machine
ssh-keygen -t ed25519 -N "" -f /tmp/cb3-431-key -C "coolify-cb3-431"

# Copy the public key to the Chromebook
ssh jace@cb3-431.local "echo 'YOUR_PUBLIC_KEY' >> ~/.ssh/authorized_keys"
```

Then paste the private key into Coolify when creating the server.

## Step 9: Enable Passwordless Sudo

Coolify needs to run commands with sudo. On the Chromebook:

```bash
sudo bash -c 'echo "jace ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/jace'
```

Now click "Validate" in Coolify - it should connect successfully.

## Troubleshooting

### "Server is not reachable"

- Check Tailscale is running on both machines: `tailscale status`
- Verify you can ping from Coolify's server: `ping 100.x.x.x`
- Make sure SSH is running: `systemctl status ssh`

### "Authentication failed" / sudo errors

- The SSH key might not match - verify the public key is in `~/.ssh/authorized_keys`
- Enable passwordless sudo (Step 9)

### WiFi not working during install

This is why I chose Lubuntu over Ubuntu Server. If you're stuck without network:
- Try USB tethering from your phone - plug it in and enable "USB Tethering" in your phone's settings
- Most desktop distros will detect phone tethering automatically

## What Can You Run?

With 4GB RAM and 32GB storage, this little server can handle:

- Small Docker containers
- Static site hosting
- Git runners
- Home automation (Home Assistant)
- Lightweight databases

It's not going to run Kubernetes, but for simple services it works great.

## Resources

- [MrChromebox Firmware Utility](https://mrchromebox.tech/) - Essential for flashing custom firmware
- [MrChromebox Getting Started](https://docs.mrchromebox.tech/docs/getting-started.html) - Full documentation
- [Supported Devices](https://docs.mrchromebox.tech/docs/supported-devices.html) - Find your Chromebook's board name and WP method
- [Chrultrabook Docs](https://docs.chrultrabook.com/) - OS compatibility and drivers

## Final Thoughts

Old Chromebooks make surprisingly decent servers. The CB3-431 is fanless, low power, and now sits quietly on a shelf running containers. With Tailscale connecting it to Coolify, I can deploy and manage apps from anywhere.

The trickiest part was getting past the firmware restrictions and finding a distro with working WiFi. Once you flash UEFI firmware and pick a desktop distro like Lubuntu, the rest is straightforward Linux server setup.

If you've got an old Chromebook gathering dust, give it a second life as a homelab server.
