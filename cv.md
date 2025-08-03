---
layout: page
title: Emilio Ureña Ramírez - Senior DevOps Engineer
permalink: /cv/
---

## Professional Summary

Senior DevOps and Platform Engineer with a strong foundation in Kubernetes, cloud infrastructure, and automation. Over the years, I've worked across AWS and GCP environments, leading infrastructure projects, building internal platforms, and driving FinOps and observability initiatives. I care deeply about creating resilient systems, enabling developer self-service, and contributing to a culture of shared ownership and continuous improvement.

## Professional Experience

### Senior Cloud Architect
**T-Systems Iberia** — *Remote from Bilbao | Jan 2025 – Present*
- Design and implement AWS architectures to support secure, scalable, and cost-efficient systems
- Automate infrastructure and CI/CD pipelines using Terraform, Jenkins, GitHub Actions, and Argo CD
- Guide clients through Kubernetes (EKS) adoption and manage cluster operations with Traefik ingress and GitOps delivery
- Advise on cloud-native patterns and best practices during migration and modernization projects

### Senior Platform Engineer
**BlueLabs** — *Remote from Bilbao | Jan 2022 – Jan 2025*
- Managed GCP infrastructure across multiple orgs, including shared VPCs and secure networking
- Built internal tooling in Python to automate Kubernetes spot node lifecycles
- Adopted GitOps workflows with Argo CD, driving consistent deployments in GKE
- Deployed an LGTM observability stack (Loki, Grafana, Mimir) on spot nodes for efficiency
- Architected Cloudflare for SaaS integration and managed over 100 zones for CDN and DDoS protection
- Developed internal back-office tools to improve infrastructure-product visibility and incident response

### Senior DevOps Engineer
**Clarivate** — *Remote from Bilbao | May 2020 – Jan 2022*
- Managed multi-region AWS infrastructure for global services, including APIs, IAM, and data services
- Built Terraform and ECS Fargate deployment pipelines using Jenkins and a custom Groovy shared library
- Enabled self-service infrastructure via Backstage integration
- Promoted DevOps culture with internal demos, workshops, and automation frameworks
- Led EKS adoption and service mesh implementation with Istio and Kiali

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
- Migrated from baremetal to OpenNebula-based virtualization
- Introduced CI/CD and config management with Puppet and Foreman
- Boosted uptime from 97% to 99.9% by modernizing legacy systems

### IT Manager
**Ferri Villena S.L.** — *Villena (Alicante) | Jul 2008 – Jun 2013*
- Led IT operations and infrastructure for an industrial company
- Managed Linux/Windows servers, ERP systems, and internal networking
- Acted as technical advisor to the executive team

## Skills

{% for skill_category in site.skills %}
**{{ skill_category.name }}**
{% for skill in skill_category.items %}
- {{ skill }}
{% endfor %}
{% endfor %}

## Education

**Degree in Computer Engineering**
*Universitat Oberta de Catalunya (UOC) — Enrolled to explore specific subjects of interest*

**Technical Engineering in Telecommunications**
*Universidad de Alicante — 2003–2008 (Not completed)*

## Languages

- **Spanish** – Native
- **English** – Proficient
- **Catalan** – Intermediate

## Key Achievements

- 💸 **$1M+ Annual Cloud Savings** — Led FinOps initiative at StubHub
- 🛠️ **99.9% Uptime** — Achieved through automation and infrastructure modernization
- 🚀 **Cloud Migration** — Led successful on-prem to cloud transitions
- 🧑‍🤝‍🧑 **Team Leadership** — Promoted into lead roles across multiple teams
- 🔐 **Compliance Delivery** — Enabled PCI/ECB-compliant cloud deployments
