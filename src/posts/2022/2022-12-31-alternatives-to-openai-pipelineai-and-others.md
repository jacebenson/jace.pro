---
title: Alternatives to OpenAI, AI21, CoHere, Azure, AWS Sagemaker, Google Colab,
description: >-
  I'm trying to understand the pricing to all of this AI / ML tech. This is a
  work in progress so far I'm categorizing the different solutions as Hosted,
  Other, or Compute.
date: '2022-12-31'
tags:
  - api
  - ai
  - chatgpt
  - beginner
redirectFrom:
  - /alternatives-to-openai/
---

I'm trying to understand the pricing to all of this AI / ML tech for my uses with [ScribeMonster](https://scribe.monster).  This is a work in progress so far I'm categorizing the different solutions as Token, Other, or Compute.

If you find an error, reach out to me on twitter @jacebenson.

## Token Solutions

| Model                     | Hosting/hour | Prompt Price | Completion Price | Cost per Request |
| ------------------------- | -------------| ------------ | ---------------- | ---------------- |
| OpenAI - Ada              |              | $0.0004/1k   | $0.0004/1k token | Free             |
| OpenAI - Ada Trained      |              | $0.0016/1k   | $0.0016/1k token | Free             |
| OpenAI - Babbage          |              | $0.0005/1k   | $0.0005/1k token | Free             |
| OpenAI - Babbage Trained  |              | $0.0024/1k   | $0.0024/1k token | Free             |
| OpenAI - Curie            |              | $0.0020/1k   | $0.0020/1k token | Free             |
| OpenAI - Curie Trained    |              | $0.0120/1k   | $0.0120/1k token | Free             |
| OpenAI - Davinci          |              | $0.0200/1k   | $0.0200/1k token | Free             |
| OpenAI - Davinci Trained  |              | $0.1200/1k   | $0.1200/1k token | Free             |
| AI21 - J-1 Large          |              | Free         | $0.0300/1k token | $0.0003          |
| AI21 - J-1 Large Trained  |              | Free         | $0.0300/1k token | $0.0003          |
| AI21 - J-1 Grande         |              | Free         | $0.0800/1k token | $0.0008          |
| AI21 - J-1 Grande Trained |              | Free         | $0.0800/1k token | $0.0008          |
| AI21 - J-1 Jumbo          |              | Free         | $0.2500/1k token | $0.0050          |
| AI21 - J-1 Jumbo Trained  |              | Free         | $0.2500/1k token | $0.0050          |
| CoHere Generate Default   |              | Free         | Free             | $0.0025          |
| CoHere Generate Custom    |              | Free         | Free             | $0.0050          |
| CoHere Classify Default   |              | Free         | Free             | $0.0020          |
| CoHere Classify Custom    |              | Free         | Free             | $0.0020          |
| CoHere Embed Default      |              | Free         | Free             | $0.0010          |
| CoHere Embed Custom       |              | Free         | Free             | $0.0020          |
| Azure - Ada               |              | $0.0004/1k   | $0.0004/1k token | Free             |
| Azure - Ada Trained       | $00.05       | $0.0004/1k   | $0.0004/1k token | Free             |
| Azure - Babbage           |              | $0.0005/1k   | $0.0005/1k token | Free             |
| Azure - Babbage Trained   | $00.08       | $0.0005/1k   | $0.0005/1k token | Free             |
| Azure - Curie             |              | $0.0020/1k   | $0.0020/1k token | Free             |
| Azure - Curie Trained     | $00.24       | $0.0020/1k   | $0.0020/1k token | Free             |
| Azure - Davinci           |              | $0.0200/1k   | $0.0200/1k token | Free             |
| Azure - Davinci Trained   | $34.00       | $0.0200/1k   | $0.0200/1k token | Free             |

- <https://openai.com/api/pricing/>
- <https://studio.ai21.com/pricing> ($29/mo after 3 month trial + tokens)
- <https://cohere.ai/pricing>
- <https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/>

## Other Solutions

| Host          |  Notes |
| ------------- | ----------------------------- |
| Google Colab  | Priced per "Compute Unit" and that's tied to your config |
| AWS Sagemaker | Different pricing for different tasks |

- <https://colab.research.google.com/signup/pricing>
- <https://aws.amazon.com/sagemaker/pricing/>


## Compute Solutions

| Host          | Monthly Price | Price                         |
| ------------- | ------------- | ----------------------------- |
| Pipeline      | $12.99        | $0.00055 / second [1.98/hour] |
| Google Cloud  |               | $3.22 / hour                  |
| AWS EC2 P3    |               | $3.06 / hour                  |
| Azure ML      |               | ?                             |

- <https://www.pipeline.ai/pricing>
- <https://cloud.google.com/tpu/pricing#how-pricing-works>
- <https://aws.amazon.com/ec2/instance-types/p3/>
- <https://azure.microsoft.com/en-in/pricing/details/machine-learning/#pricing>

## Other Resources
- GPT Products <https://www.gpt-list.com/gpt-products?ref=jace.pro>
- FutureTools <https://www.futuretools.io/?ref=jace.pro>