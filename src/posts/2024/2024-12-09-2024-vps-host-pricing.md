---
title: '2024 VPS host pricing '
description: >-
  Virtual Private Servers.... There's a little bit to know here.  I was trying
  to find a good comparison site.  Didn't see one so thought I'd toss my notes
  up ...
date: '2024-12-09'
tags: 
  - vps
  - hosting
  - pricing
redirectFrom:
  - /2024-vps-host-pricing/
---

Virtual Private Servers.... There's a little bit to know here.  I was trying to find a good comparison site.  Didn't see one so thought I'd toss my notes up here.   These prices were as of December, 2024.

1. Not all hosts are the same.
2. Shared vCPU = Allowing multiple customers to compete for the same vCPU
3. Dedicated vCPU = No one else can have it
4. vCPU = # processors ✖️ ( # cores ✖️ # of threads ).  E.g. my home computer has 1 processor with 8 cores, and 8 threads.  = 64vCPU

Let's start making some notes....

| Plan Type | CPU/GPU            | Ram   | Vultr   | cloudfanatic | Hetzner | Linode | DO      | IONOS | Hostgater | fly.io  | dreamhost |
| --------- | ------------------ | ----- | ------- | ------------ | ------- | ------ | ------- | ----- | --------- | ------- | --------- |
| Shared    | 1x vCPU            | 1gb   | 5/mo    | 3/mo         |         | 5/mo   | 6/mo    | 2/mo  |           | 6/mo    | 6/mo      |
| Shared    | 4x vCPU            | 8gb   | 40/mo   | 18/mo        | 8/mo    | 48/mo  | 48/mo   | 10/mo |           | 42/mo   | 48/mo     |
| Dedicated | 1x vCPU            | 2gb   | 28/mo   |              |         |        |         |       |           | 31/mo   |           |
| Dedicated | 4x vCPU            | 8gb   | 80/mo   |              | 27/mo   | 72/mo  | 84/mo   | 60/mo | 93/mo     | 124/mo  |           |
| BareMetal | 4c 8thread 64vCPU  | 32gb  | 120/mo  |              |         |        |         |       |           |         |           |
| BareMetal | 6c 12thread 72vCPU | 64gb  |         |              | 42/mo   |        |         |       |           |         |           |
| GPU       | 1/8 A16  ( 2gb)    | 8gb   | 44/mo   |              |         |        |         |       |           |         |           |
| GPU       | 1 A16    (16gb)    | 64gb  | 350/mo  |              |         |        |         |       |           |         |           |
| GPU       | 1/8 A100 ( 4gb)    | 15gb  | 254/mo  |              |         |        |         |       |           |         |           |
| GPU       | 1 A100   (80gb)    | 120gb | 1783/mo |              |         |        |         |       |           | 2604/mo |           |
| GPU       | H100 (80gb) 20vCPU | 240gb |         |              |         |        | 2522/mo |       |           |         |           |
| GPU       | i5, RTX4000        | 64gb  |         |              | 205/mo* | 638/mo |         |       |           |         |           |

\*Setup Fee