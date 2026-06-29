---
layout: page
title: Emilio Ureña Ramírez - Senior DevOps Engineer
permalink: /cv/
---

_Last updated: {{ site.time | date: "%Y-%m-%d" }}_

## Professional Summary

Senior DevOps and Platform Engineer with a strong foundation in Kubernetes, cloud infrastructure, and automation. Over the years, I've worked across AWS and GCP environments, leading infrastructure projects, building internal platforms, and driving FinOps and observability initiatives. I care deeply about creating resilient systems, enabling developer self-service, and contributing to a culture of shared ownership and continuous improvement.

## Professional Experience

### Senior Cloud Architect
**T-Systems Iberia** — *Remote from Bilbao | Jan 2025 – Present*
- Cloud architecture design, implementation, and management on AWS — including migration projects from OpenStack to AWS following Generalitat de Catalunya governance guidelines — ensuring scalable, secure, and cost-efficient systems.
- Assess and contribute to economic proposals for migration projects, leveraging AI agents and services like AWS Application Discovery Service to evaluate scope and strategy prior to implementation.
- Develop custom AWS solutions (Lambda, Batch) to extend cloud capabilities at organizational level, covering areas such as billing automation, security findings notification, and cost optimization for non-productive environments.
- Collaborate with clients to automate and optimize infrastructure deployment and CI/CD pipelines using tools like Terraform, Jenkins, ArgoCD and GitHub Actions, while implementing containerization and orchestration solutions.
- Mentor junior DevOps engineers, supporting their technical growth and career development.

### Senior Platform Engineer
**BlueLabs** — *Remote from Bilbao | Jan 2022 – Jan 2025*
- Managed GCP infrastructure across multiple orgs, including shared VPCs and secure networking
- Built internal tooling in Python to automate Kubernetes spot node lifecycles
- Adopted GitOps workflows with Argo CD, driving consistent deployments in GKE
- Deployed an LGTM observability stack (Loki, Grafana, Mimir) on spot nodes for efficiency
- Architected Cloudflare for SaaS integration and managed over 100 zones for CDN and DDoS protection
- Developed internal back-office tools to improve infrastructure-product visibility and incident response
- Used GCP services including Memorystore (Redis), Cloud SQL (PostgreSQL), and Pub/Sub; also worked with Pulsar for messaging

### Senior DevOps Engineer
**Clarivate** — *Remote from Bilbao | May 2020 – Jan 2022*
- Managed multi-region AWS infrastructure for global services, including APIs, IAM, and data services
- Built Terraform and ECS Fargate deployment pipelines using Jenkins, Spinnaker, and a custom Groovy shared library
- Enabled self-service infrastructure via Backstage integration
- Promoted DevOps culture with internal demos, workshops, and automation frameworks
- Led EKS adoption and service mesh implementation with Istio and Kiali
 - Led EKS adoption and service mesh implementation with Istio

### Manager / Technical Lead
**StubHub** — *Remote from Bilbao | Sep 2019 – May 2020*
- Led the Bilbao DevOps team, aligning projects with China delivery center
- Championed FinOps efforts that cut annual cloud costs by 50% (~$1M)
- Drove DevOps best practices adoption across teams

### Senior Infrastructure Engineer
**StubHub** — *Hybrid | Jun 2018 – Sep 2019*
- Helped define and deploy Kubernetes with KOPS pre-EKS
- Migrated services from on-prem to AWS cloud
- Contributed to Pivotal Cloud Foundry platform enablement across SF and Bilbao teams
- Ensured full automation of cloud infrastructure provisioning

### DevOps / Cloud Systems Architect
**BBVA Next Technologies (formerly BEEVA)** — *Hybrid | Jan 2016 – Jun 2018*
- Achieved PCI and ECB compliance for public cloud payments platform at BBVA
- Contributed to client-facing innovation projects in IoT, Big Data, and serverless on AWS
- Automated deployments with Jenkins and Bamboo using Terraform and CloudFormation
- Promoted annually, reaching architect level

### System Administrator / DevOps
**Rentalia Holidays S.L.** — *Madrid | Jun 2013 – Jan 2016*
- Migrated from bare metal to OpenNebula-based virtualization
- Introduced CI/CD and config management with Puppet and Foreman
- Boosted uptime from 97% to 99.9% by modernizing legacy systems

### IT Manager
**Ferri Villena S.L.** — *Villena (Alicante) | Jul 2008 – Jun 2013*
- Led IT operations and infrastructure for an industrial company
- Managed Linux/Windows servers, ERP systems, and internal networking
- Acted as technical advisor to the executive team

## Skills

{% assign cats = site.data.skills | sort: 'order' %}
{% for category in cats %}
**{{ category.name }}**: {{ category.items | join: ", " }}
{% endfor %}

## Education

**Degree in Computer Engineering**
*Universitat Oberta de Catalunya (UOC) — Ongoing (part-time)*

**Technical Engineering in Telecommunications**
*Universidad de Alicante — 2003–2008 (Not completed)*

## Languages

- **Spanish** – Native
- **English** – Proficient
- **Catalan** – Intermediate

## Key Achievements

- <span class="emoji-large">💸</span> **$1M+ Annual Cloud Savings** — Led FinOps initiative at StubHub
- <span class="emoji-large">🛠️</span> **99.9% Uptime** — Achieved through automation and infrastructure modernization
- <span class="emoji-large">🚀</span> **Cloud Migration** — Led successful on-prem to cloud transitions
- <span class="emoji-large">🧑‍🤝‍🧑</span> **Team Leadership** — Promoted into lead roles across multiple teams
- <span class="emoji-large">🔐</span> **Compliance Delivery** — Enabled PCI/ECB-compliant cloud deployments
