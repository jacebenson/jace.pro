---
aliases:
- '/nextcloud/'
date: '2018-02-11'
layout: post
title: Setting up NextCloud
---

This is a quick how-to setup NextCloud. Documented so I can do this
later quickly. I had used the SNAP to install it initially and that
worked well until I tried to use a volume that I could expand easily. It
seems SNAPs don't have access to `/mnt` points.

1.  Create LAMP 16.04 1-click install VPS on Digital Ocean \$5/mo
2.  Set up networking for your domain
3.  In your new Droplet, create a Volume for VPS where you'll store the
    files
4.  SSH to VPS

``` {.bash}
MOUNTPOINT=yourVolumeNameHere
DOMAIN=enter.your.domain.here

# Format the volume with ext4 Warning: This will erase all data on the volume.
# Only run this command on a volume with no existing data.
sudo mkfs.ext4 -F /dev/disk/by-id/scsi-0DO_Volume_${MOUNTPOINT}

# Create a mount point under /mnt
sudo mkdir -p /mnt/${MOUNTPOINT}

# Mount the volume
sudo mount -o discard,defaults /dev/disk/by-id/scsi-0DO_Volume_${MOUNTPOINT} /mnt/${MOUNTPOINT}

# Change fstab so the volume will be mounted after a reboot
echo '/dev/disk/by-id/scsi-0DO_Volume_${MOUNTPOINT} /mnt/${MOUNTPOINT} ext4 defaults,nofail,discard 0 0' | sudo tee -a /etc/fstab

# Change ownership
chown -R www-data:www-data /mnt/${MOUNTPOINT}

# Add required repository for SSL Certificates
sudo add-apt-repository ppa:certbot/certbot

# Run the update
sudo apt-get update

# Download nextcloud
wget https://download.nextcloud.com/server/releases/nextcloud-13.0.0.zip

# Install dependencies to unzip, and run nextcloud
sudo apt-get install unzip libxml2-dev php-zip php-dom php-xmlwriter php-xmlreader php-gd php-curl php-mbstring python-certbot-apache -y

# Unzip nextcloud to ~/nextcloud
unzip nextcloud-13.0.0.zip

# Copy recursively ~/nextcloud to default apache directory
cp -r ./nextcloud /var/www/html

# I had to remove/copy these files over to get rid of an error on Nextcloud as they match the checksums
rm /var/www/html/info.php
mv ./nextcloud/.user.ini /var/www/html/.user.ini
mv ./nextcloud/.htaccess /var/www/html/.htaccess

# Change ownership of nextcloud folder to www-data user
chown -R www-data:www-data /var/www/html

# run certbot for this domain, it will ask you questions here.
sudo certbot --apache -d ${DOMAIN}

# verify the renewal process will run without an issue
sudo certbot renew --dry-run

# restart apache
sudo service apache2 restart

# cleanup unneeded files
rm nextcloud-13.0.0.zip
rm -rf ./nextcloud


# mysql setup
cat .digitalocean_password
# should echo something like
# root_mysql_pass="b8748f906dd947bf54d0851a862306f5029eb65598a587f3"
# copy the password
mysql_secure_installation
mysql -u root -p
# paste your password
# set up database and database user
mysql> CREATE DATABASE nextcloud;
mysql> GRANT ALL PRIVILEGES ON nextcloud.* TO "nextcloud"@"localhost"
    -> IDENTIFIED BY "nextcloudpassword";
mysql> FLUSH PRIVILEGES;
mysql> \q
```

1.  Navigate to your \${DOMAIN}
2.  Set up admin user/password
3.  Data folder should be the mountpoint e.g. /mnt/\${MOUNTPOINT}
4.  Database user: nextcloud
5.  Database pass: whatever you put in IDENTIFIED BY line
6.  Database name: nextcloud
7.  Database server: localhost
