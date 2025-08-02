---
layout: page
permalink: /skills/
---

# Skills

{% for skill_category in site.skills %}
## {{ skill_category.name }}
{% for skill in skill_category.items %}
- {{ skill }}
{% endfor %}
{% endfor %}
