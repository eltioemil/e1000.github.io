---
layout: page
title: Skills
permalink: /skills/
---

{% for skill_category in site.skills %}
## {{ skill_category.name }}
{% for skill in skill_category.items %}
- {{ skill }}
{% endfor %}
{% endfor %}
