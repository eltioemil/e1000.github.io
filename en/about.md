---
layout: page
title: About Me
permalink: /about/
lang: en
lang_ref: about
---

## Hey, I'm Emilio

I'm a Senior DevOps Engineer based in Bilbao, Spain. I've been working in infrastructure and cloud for 15+ years — from racking servers and managing on-prem systems to automating multi-cloud environments and running Kubernetes in production.

I started out doing everything from networking to sysadmin work. Over time, I leaned into automation, infrastructure as code, and eventually the cloud-native world. These days, I focus on building reliable, scalable platforms and helping teams ship faster with less stress.

## What I Work On

I've spent most of my recent years working with:

{% assign cats = site.data.skills | sort: 'order' %}
{% for category in cats %}
- **{{ category.name }}**: {{ category.items | join: ", " }}
{% endfor %}

I've also led platform teams, contributed to incident reviews, helped development teams manage their own infrastructure autonomously, and pushed for better practices without becoming dogmatic about it.

## A Bit More About Me

Outside of work, I enjoy messing with open source tooling, testing out new tech, and sharing what I learn with the people around me. I'm also into Raspberry Pis, small robotics projects, and 3D printing — anything hands-on that scratches the builder itch.

When I'm not in tech mode, I'm usually on my road bike, out for a run, playing RPGs or tabletop games, or just spending time with my family (including a dog and two cats who rule the house).

## Let's Talk

I'm always open to interesting new opportunities. If you're working on something like that or just want to exchange ideas, feel free to reach out — whether it's automation, infrastructure, or building better teams.

**Email:** {{ site.email }}
**LinkedIn:** [emiliourena](https://www.linkedin.com/in/emiliourena)
**GitHub:** [@{{ site.github_username }}](https://github.com/{{ site.github_username }})
**Fosstodon:**   [@{{ site.fosstodon_username }}](https://fosstodon.org/@{{ site.fosstodon_username }})
