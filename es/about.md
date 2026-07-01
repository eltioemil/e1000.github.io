---
layout: page
title: Sobre mí
permalink: /es/about/
lang: es
lang_ref: about
---

## Hola, soy Emilio

Soy Ingeniero DevOps Senior afincado en Bilbao. Llevo más de 15 años trabajando en infraestructura y cloud — desde montar servidores físicos y gestionar sistemas on-prem hasta automatizar entornos multicloud y ejecutar Kubernetes en producción.

Empecé haciendo de todo: redes, administración de sistemas... Con el tiempo me fui volcando en la automatización, la infraestructura como código y, finalmente, el mundo cloud-native. Ahora me centro en construir plataformas fiables y escalables, y en ayudar a los equipos a entregar más rápido y con menos estrés.

## En qué trabajo

He dedicado los últimos años principalmente a:

{% assign cats = site.data.skills | sort: 'order' %}
{% for category in cats %}
- **{{ category.name }}**: {{ category.items | join: ", " }}
{% endfor %}

También he liderado equipos de plataforma, participado en revisiones post-mortem, ayudado a los equipos de desarrollo a gestionar su propia infraestructura de forma autónoma e impulsado buenas prácticas sin caer en el dogmatismo.


## Un poco más sobre mí

Fuera del trabajo, me gusta trastear con herramientas open source, probar tecnologías nuevas y compartir lo que aprendo con quienes me rodean. También las Raspberry Pi, la robótica y la impresión 3D — cualquier excusa para construir algo con las manos.

Cuando desconecto, suelo estar en la bici de carretera, saliendo a correr, jugando a rol o juegos de mesa, o simplemente disfrutando de mi familia (con un perro y dos gatos que mandan más que nadie).

## Hablamos

Siempre estoy abierto a nuevas oportunidades interesantes. Si estás trabajando en algo así o simplemente quieres intercambiar ideas, no dudes en escribirme — ya sea sobre automatización, infraestructura o cómo crear mejores equipos.

**Email:** {{ site.email }}
**LinkedIn:** [emiliourena](https://www.linkedin.com/in/emiliourena)
**GitHub:** [@{{ site.github_username }}](https://github.com/{{ site.github_username }})
**Fosstodon:**   [@{{ site.fosstodon_username }}](https://fosstodon.org/@{{ site.fosstodon_username }})
