---
layout: page
title: Emilio Ureña Ramírez - Senior DevOps Engineer
permalink: /cv/
lang: en
lang_ref: cv
---

## Professional Summary

Senior DevOps and Platform Engineer with a strong foundation in Kubernetes, cloud infrastructure, and automation. Over the years, I've worked across AWS and GCP environments, leading infrastructure projects, building internal platforms, and driving FinOps and observability initiatives. I care deeply about creating resilient systems, enabling developer self-service, and contributing to a culture of shared ownership and continuous improvement.

## Professional Experience

### Senior Cloud Architect
**T-Systems Iberia** — *Remote from Bilbao | Jan 2025 – Present*
- Cloud architecture design, implementation, and management on AWS — including migration projects from OpenStack to AWS following Generalitat de Catalunya governance guidelines — ensuring scalable, secure, and cost-efficient systems.
- Part of the team that maintains the Generalitat de Catalunya AWS landing zone and organization — automating operational tasks and building tooling to manage services at org level, where AWS hasn't implemented global solutions yet.
- As part of this, I develop custom solutions with Lambda and Python to cover those needs: billing automation, Security Hub Findings notification, and cost optimization for non-productive environments.
- Collaborate with clients to optimize their CI/CD pipelines with GitHub Actions, infrastructure deployment with Terraform, and platform deployments with ArgoCD, while implementing containerization and orchestration solutions.
- Mentor junior DevOps engineers, supporting their technical growth and career development.

### Senior Platform Engineer
**BlueLabs** — *Remote from Bilbao | Jan 2022 – Jan 2025*
- Was part of the team managing multiple GKE environments on GCP with purpose-isolated clusters for internal tooling, observability, and business workloads
- Built a Python service to continuously monitor GCP spot node interruption notices and gracefully drain pods before node removal, protecting async workloads from in-transit data loss
- Contributed to the team's adoption of GitOps with Argo CD, and to the deployment of the LGTM observability stack on spot nodes for cost-efficient full-stack monitoring
- Helped design and build an automated domain provisioning system in Cloudflare handling several brands and over a hundred zones — monitoring their availability through a Python service we built that orchestrated and mitigated potential failures, and implementing the Cloudflare BYOIP service.
- Built internal back-office tooling on Retool for infrastructure visibility and incident response

### Senior DevOps Engineer
**Clarivate** — *Remote from Bilbao | May 2020 – Jan 2022*
- On the platform automation team, we managed multi-region AWS environments for ECS services and all their dependencies
- Started a Groovy shared library for Jenkins out of frustration with repetitive boilerplate — it caught management's attention, scaled to other teams, and was integrated with Backstage to give developers a full self-service infrastructure setup from day one
- Promoted DevOps culture through internal talks and workshops, visibility that grew organically from the automation work
- Helped evaluate the adoption of Kubernetes for production as part of a team, deploying clusters and running proofs of concept to explore different configurations and tooling

### Manager / Technical Lead
**StubHub** — *Remote from Bilbao | Sep 2019 – May 2020*
- Took over as interim manager of the Bilbao infrastructure team and transitioned into the formal engineering lead role
- Worked closely with the Shanghai infrastructure team to align both teams on a shared platform
- Continued driving DevOps culture and automation best practices across teams

### Senior Infrastructure Engineer
**StubHub** — *Hybrid | Jun 2018 – Sep 2019*
- Acted as the main point of contact between US and Bilbao engineers in eBay's complex deployment ecosystem — building relationships and obtaining credentials and permissions to systems the local team couldn't access
- Joined a teammate-led effort to deploy Kubernetes with KOPS on AWS (pre-EKS) to support the new Asia primary market platform — designed to scale around ticket sale windows
- Contributed to a Pivotal Cloud Foundry initiative to unify AWS and on-prem infrastructure under a single platform layer, working alongside the San Francisco engineering team — paused when the sponsoring CTO left
- Cut annual AWS costs by 50% (~$1M) by identifying and eliminating waste in the legacy platform — one of several contributions that led to a promotion to engineering lead

### DevOps / Cloud Systems Architect
**BBVA Next Technologies (formerly BEEVA)** — *Hybrid | Jan 2016 – Jun 2018*
- As part of the infrastructure team at the BBVA Innovation Center, helped build and automate cloud infrastructure on AWS for Nimble Payments, a virtual payment platform, working in sprints alongside the development team using Terraform and Bamboo
- Worked across multiple projects within the External Clients department — serverless APIs, IoT smart lock systems, Big Data pipelines, and custom DynamoDB and Lambda solutions for companies like Naturgy and Securitas Direct. DevOps engineers across different projects and clients met regularly to align on best practices and Terraform patterns
- Built a custom solution with Lambda and Python for provisioning new AWS accounts and their base infrastructure — before AWS Landing Zone, AFT, or Control Tower existed
- This was a defining stage in my professional growth — surrounded by very experienced engineers, I learned and developed enough to earn a promotion every year, reaching architect level

### System Administrator / DevOps
**Rentalia Holidays S.L.** — *Madrid | Jun 2013 – Jan 2016*
- Migrated from bare metal to OpenNebula-based paravirtualization, decommissioning physical servers and modernizing the entire production infrastructure — all of it as a two-person infrastructure team
- Introduced Puppet, Foreman, Ansible, and Jenkins to bring config management and CI/CD to a legacy codebase spanning PHP/Symfony, Perl, and Mojolicious — my first real exposure to the DevOps paradigm
- Identified and resolved a PostgreSQL bottleneck, significantly improving system performance and reliability
- Took uptime from 97% to 99.9% as a result of these combined improvements

### IT Manager
**Ferri Villena S.L.** — *Villena (Alicante) | Jul 2008 – Jun 2013*
- Managed IT operations and infrastructure for an industrial company — servers, ERP systems, and internal networking
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


_Last updated: {{ site.time | date: "%Y-%m-%d" }}_
