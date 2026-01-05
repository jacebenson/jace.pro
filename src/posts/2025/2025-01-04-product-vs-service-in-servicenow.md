---
title: 'Product vs Service in ServiceNow'
description: >-
  The difference between Product Offerings and Service Offerings in ServiceNow explained.
date: '2025-01-04'
tags: 
  - servicenow
  - csdm
  - somt
redirectFrom:
  - /product-vs-service-in-servicenow/
  - /p/2025-01-04-product-vs-service-in-servicenow/
---

ServiceNow has Products and Services. They're not the same thing. Here's the difference.

# TLDR

**Products** are what you sell to customers (SOMT, Product Catalog). **Services** are what you deliver and support internally (CSDM, CMDB).

A customer buys a "1 Gigabit Internet Plan" (Product). You provision and manage a "Fiber Internet Service" (Service).

# The Breakdown

| Aspect | Product (Product Offering) | Service (Service Offering) |
|---|---|---|
| **Primary Purpose** | Sales & Commerce. Defines what is sold to a customer and appears on a quote or order. | Operations & Support. Defines how a capability is delivered, managed, and supported internally. |
| **Audience** | External Customers and the Sales Department. | Internal Teams (IT, Operations, Support) and potentially internal employees. |
| **Module / Framework** | Part of the SOMT (Service Order Management) and Product Catalog Management modules. | Part of the CSDM (Common Service Data Model) and CMDB (Configuration Management Database). |
| **Relation to CMDB** | Not part of the CMDB class structure. It's a separate, commercial catalog. | Intrinsically tied to the CMDB (e.g., cmdb_ci_service). Used to model operational services. |
| **Lifecycle Stage** | "What is Sold?" The beginning of the customer lifecycle (Ordering, Billing). | "How is it Delivered?" The middle and end of the lifecycle (Fulfillment, Assurance, Support). |

# Examples

**Internet Service:**
- **Product Offering:** "1 Gigabit Internet Plan" - This is the item a customer selects and pays for.
- **Service Offering:** "Provisioned Fiber Internet Service" - This is the operational service that is managed, monitored, and supported.

**Corporate Laptop:**
- **Product Offering:** "Dell Laptop Model X with 3-Year Support" - The sellable item with a specific SKU.
- **Service Offering:** "Corporate Laptop Support" - The internal service desk offering for troubleshooting hardware issues.

# Why This Matters

If you're implementing SOMT (Service Order Management for Telecommunications) or building out your CSDM (Common Service Data Model), understanding this distinction prevents you from mixing commercial catalog items with operational services.

Products live in your sales catalog. Services live in your CMDB.

Don't confuse them.
