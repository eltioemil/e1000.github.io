---
layout: page
title: Projects & Achievements
permalink: /projects/
lang: en
lang_ref: projects
---

Here are some key initiatives I've worked on throughout my career in DevOps, platform engineering, and cloud infrastructure.

## AWS Organization Tooling at T-Systems

**Technologies:** Python, AWS Lambda, DynamoDB, AWS Organizations, Billing Conductor, ECS, Security Hub, Jira API, Terraform

Custom automation tooling for a 350+ account AWS organization for the Generalitat de Catalunya, filling gaps where AWS doesn't provide centralized management at org level. Notable tools built:

- **Billing Conductor automation** — cross-org Lambda that keeps every account assigned to the correct billing group based on tags, auto-fixes safe misplacements, and notifies finance and account owners of discrepancies
- **ECS Instance Scheduler** — DynamoDB-backed scheduling system similar to AWS's official EC2/RDS scheduler (which doesn't cover ECS) — scoped to non-productive environments via org unit IDs, services opt in via tags, scale to 0 overnight and on weekends, with replica counts stored to restore exact state the next working day
- **Security Hub → Jira** — monthly scan of critical and high findings across the org, creating Jira tickets assigned to the security owner of each department from a DynamoDB lookup table

**Impact:**
- Finance gets accurate per-department billing without manual reconciliation
- Non-productive ECS workloads shut down outside business hours, reducing costs
- Security findings automatically routed to the right owner every month

## Kubernetes-Based Platform Operations at BlueLabs

**Technologies:** GCP, GKE, Argo CD, Terraform, Python

GKE environment on GCP with purpose-isolated clusters and GitOps workflows with Argo CD. Built a Python service to continuously monitor GCP spot node interruption notices and gracefully drain pods before node removal, protecting async workloads from in-transit data loss.
**Impact:**
- Production workloads ran entirely on spot nodes without customer-facing reliability issues
- Graceful pod eviction eliminated the risk of data loss from abrupt node termination in async services
- GitOps workflows brought consistency and auditability to deployments across all environments

## Observability Stack on Kubernetes at BlueLabs

**Technologies:** Loki, Grafana, Mimir, Prometheus, Thanos, Fluent-bit, Kubernetes

A collaborative team effort to build a centralized observability cluster that aggregated logs and metrics from the other GKE clusters. Each engineer owned a component — log collection with Fluent-bit shipping to Loki, metrics with Prometheus and Thanos shipping to Mimir, and Grafana for visualization. The whole stack deployed on spot nodes to keep costs low.

**Impact:**
- Full control over retention, alerting rules, and configuration — not possible with managed solutions
- Each team could instrument and visualize their own services without vendor constraints
- Faster debugging and incident response across all environments

## Automated Domain Management at Scale at BlueLabs

**Technologies:** Cloudflare, BYOIP, Cloudflare for SaaS, Python, Retool

The engineering manager started the system; I took it over, developed it fully, and brought it to production. The Python service was designed from the start as an API — handling zone provisioning across Cloudflare, real-time availability monitoring, and automatic failover orchestration. The Retool back-office was one of its consumers, giving the team a visual interface to manage zone lifecycle. Also led the BYOIP initiative to bring a /24 IP block into Cloudflare.

**Impact:**
- Automated failover eliminated manual intervention during domain incidents
- Zone lifecycle tooling kept a 100+ zone estate manageable at scale

## Self-Service Infrastructure Platform at Clarivate

**Technologies:** AWS, Terraform, Jenkins, Groovy, ECS Fargate, Backstage

A Jenkins-based automation platform with reusable Groovy libraries to deploy Terraform-managed infrastructure and ECS-based applications. Responsible for design, development, and rollout across teams via Backstage.

**Impact:**
- Enabled developer self-service for infrastructure and application deployment
- Reduced manual provisioning time by 80%
- Promoted infrastructure-as-code practices across teams

## Cloud Cost Optimization at StubHub

**Technologies:** AWS, GCP, FinOps, CloudFormation, Terraform

Responsible for a FinOps initiative that cut annual cloud costs by 50%, saving over $1M — an achievement that directly contributed to a promotion to engineering lead. Full scope: defining a fully automated cloud infrastructure strategy and migrating legacy systems from on-prem to AWS.

**Impact:**
- Reduced cloud costs by 50%
- Improved reliability with 99.9% uptime
- Contributed to PCI-compliant deployments and international platform enablement

## Technical Enablement & Team Leadership

Throughout my career I've often been the person colleagues turn to when they're blocked — regardless of title. At StubHub I held this formally as a manager and mentor; elsewhere it's been organic, helping senior and junior engineers alike work through problems, navigate architecture decisions, and raise the quality bar without anyone asking me to.

## Want to Learn More?

Check out my [GitHub](https://github.com/{{ site.github_username }}) or [LinkedIn](https://www.linkedin.com/in/{{ site.linkedin_username }}) for more about my work and ideas. I'm also in [Mastodon](https://fosstodon.org/@{{ site.fosstodon_username }})
Looking to collaborate or need help with infrastructure challenges? [Get in touch](/contact/)!
