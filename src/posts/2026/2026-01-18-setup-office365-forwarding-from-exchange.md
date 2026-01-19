---
title: "Setting up Email Forwarding to Basecamp in Microsoft 365"
description: "A step-by-step guide to configure email forwarding from a Microsoft 365 shared mailbox to Basecamp, including mailbox settings and outbound spam filter policies."
date: 2026-01-16
tags:
  - microsoft365
  - email
---

# How to Set Up Email Forwarding to Basecamp in Microsoft 365

This guide walks through setting up external email forwarding from a Microsoft 365 shared mailbox to Basecamp (or any external address).

## Overview

Microsoft 365 has **two layers** that control email forwarding:

1. **Mailbox Forwarding Settings** - Where you configure *where* to forward emails
2. **Outbound Spam Filter Policy** - Controls *whether* external forwarding is allowed

Both must be configured correctly, or forwarding will fail with error:
```
550 5.7.520 Access denied, Your organization does not allow external forwarding. AS(7555)
```

---

## Step 1: Configure Mailbox Forwarding

### Via Exchange Admin Center

1. Go to https://admin.exchange.microsoft.com
2. Navigate to **Recipients** → **Mailboxes**
3. Select the shared mailbox (e.g., `team@example.com`)
4. Click **Mail flow** → **Email forwarding**
5. Enable **Forward all emails sent to this mailbox**
6. Enter the Basecamp forwarding address (e.g., `save-not-real-value@3.basecamp.com`)
7. Optionally check **Keep a copy of forwarded messages**
8. Save

### Via PowerShell

```powershell
# Connect to Exchange Online
Connect-ExchangeOnline -UserPrincipalName your-admin@domain.com -Device

# Set forwarding address
Set-Mailbox -Identity "team@example.com" `
    -ForwardingSmtpAddress "smtp:save-not-real-value@3.basecamp.com" `
    -DeliverToMailboxAndForward $true

# Verify
Get-Mailbox -Identity "team@example.com" | Format-List ForwardingSmtpAddress,DeliverToMailboxAndForward
```

---

## Step 2: Allow External Forwarding in Anti-Spam Policy

This is the step that's often missed. By default, Microsoft 365 blocks external forwarding.

### Option A: Add to Existing Policy (If You Already Have One)

If you already have an outbound spam filter rule allowing forwarding for other mailboxes:

#### Via PowerShell

```powershell
# Connect to Exchange Online
Connect-ExchangeOnline -UserPrincipalName your-admin@domain.com -Device

# Check existing rules
Get-HostedOutboundSpamFilterRule | Format-List Name,From,State

# Add the new mailbox to an existing rule
Set-HostedOutboundSpamFilterRule -Identity "Your Rule Name" `
    -From "existing@domain.com","team@example.com"

# Verify
Get-HostedOutboundSpamFilterRule -Identity "Your Rule Name" | Format-List Name,From
```

### Option B: Create New Policy and Rule

If you don't have an existing forwarding policy:

#### Via Microsoft 365 Defender Portal

1. Go to https://security.microsoft.com
2. Navigate to **Email & collaboration** → **Policies & rules** → **Threat policies**
3. Click **Anti-spam**
4. Go to **Outbound policies** tab
5. Click **Create policy** → **Outbound**
6. Configure:
   - **Name**: "Allow External Forwarding"
   - **Automatic forwarding**: Set to **On - Forwarding is enabled**
7. Under **Applied to**, add the mailboxes that need forwarding:
   - **From**: `team@example.com`
8. Save

#### Via PowerShell

```powershell
# Connect to Exchange Online
Connect-ExchangeOnline -UserPrincipalName your-admin@domain.com -Device

# Create new outbound spam filter policy with forwarding enabled
New-HostedOutboundSpamFilterPolicy -Name "AllowForwarding" -AutoForwardingMode On

# Create rule to apply policy to specific mailboxes
New-HostedOutboundSpamFilterRule -Name "Allow External Forwarding" `
    -HostedOutboundSpamFilterPolicy "AllowForwarding" `
    -From "team@example.com"

# Verify
Get-HostedOutboundSpamFilterRule | Format-List Name,From,HostedOutboundSpamFilterPolicy,State
```

---

## Troubleshooting

### Check Current Forwarding Settings

```powershell
Get-Mailbox -Identity "team@example.com" | Format-List Name,ForwardingAddress,ForwardingSmtpAddress,DeliverToMailboxAndForward
```

### Check Outbound Spam Filter Policies

```powershell
# List all policies
Get-HostedOutboundSpamFilterPolicy | Format-List Name,AutoForwardingMode

# List all rules (shows which users/mailboxes each policy applies to)
Get-HostedOutboundSpamFilterRule | Format-List Name,HostedOutboundSpamFilterPolicy,From,State
```

### Check Remote Domain Settings

```powershell
Get-RemoteDomain | Format-List DomainName,AutoForwardEnabled
```

---

## Quick Reference

| Setting | Location | Purpose |
|---------|----------|---------|
| ForwardingSmtpAddress | Exchange Admin → Mailbox | Where to forward emails |
| AutoForwardingMode | Defender → Anti-spam → Outbound | Whether forwarding is allowed |
| HostedOutboundSpamFilterRule | Defender → Anti-spam → Outbound | Which mailboxes the policy applies to |

---

## Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `550 5.7.520 Access denied... AS(7555)` | Outbound spam policy blocking forwarding | Add mailbox to spam filter rule with `AutoForwardingMode = On` |
| Forwarding not working (no error) | ForwardingSmtpAddress not set | Configure mailbox forwarding in Exchange Admin |

---

## Notes

- Changes typically take effect within a few minutes
- The "Default" outbound spam policy has `AutoForwardingMode = Automatic` which blocks external forwarding
- You must create a custom policy with `AutoForwardingMode = On` and apply it to mailboxes that need forwarding
