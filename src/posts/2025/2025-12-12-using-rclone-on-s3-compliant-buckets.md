---
title: Using Rclone on s3-compliant buckets
description: Today I got an email my old VPS host is changing the pricing on
  storage.  I moved a lot of my infrastructure to Hetzner so I thought I'd move
  the s3 object storage today.
date: 2025-12-11
tags:
  - hosting
---
## What is s3

S3 is a pretty neat idea.  It's a place to store files for a price.  What's really nice about using S3 is you can store larger static assets or build assets and not have to include them in your build.  Or you can use it as a place to store your backups of your databases.

## How can RClone help?

Rclone is a command line utility that lets you connect to and work with a bunch of storage to store different things including S3.  I didn't know this.

## Okay, how do I connect Rclone to a bucket?

1. First install [Rclone](https://rclone.org/install/)
2. Then you need to configure a connection, do that by running `rclone config`, then choose `n) New remove`
3. Give it a name, I named this `vult` as it's the connect to the Vultr S3 buckets.
4. It gives you a big ol' list.  I wanted to use s3, so near the top is one called `Amazon S3 Compliant Storage Providers`.  It was 4 for me, so I put in `4`.
5. Then it asks for a Provider, I didn't see Vultr, so I just picked Amazon Web Services S3 `1`.
6. It will ask to either be given the credential or get them from an env var.  I chose to give the credentials to it by choosing `1`
7. It will then ask for the following;
  - `access_key_id` give this to it
  - `secret_access_key` give this to it
  - `region` for Vultr this didn't matter, left it blank
  - `endpoint` for this its important you give the proper endpoint.  Vultrs was `ewr1.vultrobjects.com`, you'll want to put in your endpoint of your S3 compliant host here.
  - `location_constraint`, didn't matter for Vultr, left blank
  - `acl`, didn't matter for Vultr, left blank
  - `server_side_encryption`, didn't matter for Vultr, left blank
  - `sse_kms_key_id`, didn't matter for Vultr, left blank
  - `storage_class`, didn't matter for Vultr, left blank
8. Then it will ask if you want to edit advanced config?  Go ahead and say `n) No`
9. It'll show you the settings confirm this `y) Yes this is OK`

Now that it's set up you can test this by listing the buckets for the connection by typing `rclone lsd vult:`  that last `:` is important  this should list your buckets.

Cool

## Now let's copy that to another bucket

You'll need to set up a second bucket at your destination.  Once you get that set up.  It's a command per bucket.

`rclone sync -v vult:bucketname/ newhost:bucketname/`

This runs the `sync` which uploads everything from the first host, to the second and removing anything on new host that wasn't there.  E.g. If you had a file for each of the Simpsons (homer.png, marg.png, bart.png, lisa.png, maggie.png) and wanted to copy them over to an existing bucket that had a photo of me, jace.png, and your ran sync.  At the end you'd have the Simpsons, and the jace.png would be gone.

You can instead run a `copy` which just copies the files and doesn't remove things that don't exist in the source.



Thanks [Jacob Nollette](https://www.linkedin.com/in/jacob-nollette/) for the assist here!  Really appreciate it!
