---
title: 'Supporting Netlify _redirects on Coolify er nginx'
description: >-
  So there I was realizing that I had a URL I wanted to alias to another URL. On Netlify it was so easy. On Coolify I couldn't find a way to do it. So I took another approach. This is that.
tags:
  - netlify
  - nginx
  - coolify
date: '2026-02-19'
---
Using Netlify-style _redirects with Coolify

I've been hosting this site on Coolify for a while now, and it's been great. But one thing I missed from my Netlify days was the simple `_redirects` file. You know, the one where you just write:

```
/old-path /new-path 301
```

And it just works.

Recently, I needed to change a URL on my site - `/submit-session` to `/speak`. On Netlify, this would be a one-line change in a `_redirects` file. But on Coolify, which uses nginx under the hood, I had to figure something out.

## The Problem

Coolify doesn't natively support Netlify's `_redirects` file format. When I tried to include it directly in nginx config, it failed because nginx was trying to parse Netlify syntax as nginx config.

## The Solution

I ended up with a build-time conversion approach:

1. Keep a simple `_redirects` file in the Netlify format
2. Run a small shell script after the build that converts it to nginx rewrite rules
3. Have nginx include the generated config

Here's the redirect file (`src/_redirects`):

```
/submit-session /speak 301
/conference/2025 /2025/conference 301
/terms /event-terms 301
/privacy /privacy-policy 301
```

And here's the conversion script:

```bash
#!/bin/bash
# Convert Netlify _redirects to nginx rewrite rules

REDIRECTS_FILE="dist/_redirects"
NGINX_REDIRECTS_FILE="dist/_redirects.conf"

if [ -f "$REDIRECTS_FILE" ]; then
    echo "# Auto-generated from _redirects" > "$NGINX_REDIRECTS_FILE"
    
    while IFS= read -r line; do
        # Skip comments and empty lines
        if [[ "$line" =~ ^#.*$ ]] || [[ -z "$line" ]]; then
            continue
        fi
        
        # Parse: /old-path /new-path [status]
        read -r from to status <<< "$line"
        
        # Only handle 301 redirects (permanent)
        if [[ "$status" == "301" ]]; then
            # Escape dots for nginx regex
            from_escaped=$(echo "$from" | sed 's/\./\\./g')
            # Use https://$host to preserve domain
            echo "rewrite ^${from_escaped}(/.*)?$ https://\$host${to}\$1 permanent;" >> "$NGINX_REDIRECTS_FILE"
        fi
    done < "$REDIRECTS_FILE"
fi
```

Then in the nginx config:

```nginx
server {
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;

        # Include generated nginx rewrite rules
        include /usr/share/nginx/html/_redirects.conf;

        try_files $uri $uri.html $uri/index.html $uri/index.htm $uri/ =404;
    }

    # Handle 404 errors
    error_page 404 /404.html;
    location = /404.html {
        root /usr/share/nginx/html;
        internal;
    }

    # Handle server errors (50x)
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
        internal;
    }
}
```

## The Result

Now I can manage all my redirects in a simple file that anyone on my team can edit - no nginx knowledge required. Just add a line like:

```
/old-url /new-url 301
```

And the build converts it automatically. It's not as seamless as Netlify's native support, but it's close.

## Why This Matters

If you're migrating from Netlify (or just want simple redirect management), this approach gives you that convenience without losing the flexibility of hosting on Coolify. The redirect file becomes the single source of truth, and the build handles the translation to nginx config.

It's one of those small quality-of-life improvements that makes maintaining a static site a little bit nicer.
