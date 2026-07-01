---
layout: page
title: Emilio Ureña Ramírez - Ingeniero DevOps Senior
permalink: /es/cv/
lang: es
lang_ref: cv
---

## Resumen Profesional

Ingeniero DevOps y de Plataforma Senior con una base sólida en Kubernetes, infraestructura Cloud y automatización. Con los años he trabajado en entornos AWS y GCP liderando proyectos de infraestructura, construyendo plataformas internas e impulsando iniciativas de FinOps y observabilidad. Pongo mucho empeño en crear sistemas resilientes, en facilitar el autoservicio a los equipos de desarrollo y en contribuir a una cultura de responsabilidad compartida y mejora continua.

## Experiencia Profesional

### Arquitecto Cloud Senior
**T-Systems Iberia** — *Remoto desde Bilbao | Ene 2025 – Presente*
- Me encargo del diseño, implementación y gestión de arquitecturas cloud en AWS, incluyendo migraciones desde OpenStack siguiendo las directrices de gobernanza de la Generalitat de Catalunya para garantizar sistemas escalables, seguros y con costes controlados.
- Formo parte del equipo que mantiene la landing zone y la organización AWS de la Generalitat de Catalunya — automatizando tareas operativas y desarrollando herramientas para gestionar servicios a escala de organización donde AWS todavía no ha implementado soluciones globales.
- Como parte de esto, desarrollo soluciones a medida con Lambda y Python para cubrir esas necesidades: automatización de facturación, notificación de Security Hub Findings y optimización de costes en entornos no productivos.
- Colaboro con clientes para optimizar sus pipelines de CI/CD con GitHub Actions, el despliegue de infraestructura con Terraform y los despliegues de plataforma con ArgoCD, implementando además soluciones basadas en contenedores y orquestación.
- Doy mentoría a ingenieros DevOps junior, apoyando su crecimiento técnico y profesional.

### Ingeniero de Plataforma Senior
**BlueLabs** — *Remoto desde Bilbao | Ene 2022 – Ene 2025*
- Formé parte del equipo que gestionaba varios entornos GKE en GCP con clústeres aislados por propósito: herramientas internas, observabilidad y cargas de trabajo de negocio
- Desarrollé un servicio en Python para monitorizar de forma continua los avisos de interrupción de nodos spot de GCP y drenar los pods de forma ordenada antes del apagado, protegiendo las cargas de trabajo asíncronas de pérdidas de datos en tránsito
- Contribuí a la adopción de GitOps con Argo CD en el equipo, y al despliegue de la stack de observabilidad LGTM en nodos spot para una monitorización completa y eficiente en cuanto a costes
- Ayudé a diseñar y automatizar un sistema de aprovisionamiento automático de dominios en Cloudflare, donde se gestionaban varias marcas haciendo un total de más de cien zonas, monitorizando su disponibilidad mediante un servicio creado por nosotros en Python que orquestaba y mitigaba posibles fallos. Además implementamos el servicio de BYOIP de Cloudflare.
- Construí herramientas back-office internas con Retool para visibilidad de infraestructura y respuesta a incidentes

### Ingeniero DevOps Senior
**Clarivate** — *Remoto desde Bilbao | May 2020 – Ene 2022*
- En el equipo de automatización de plataforma, gestionábamos entornos AWS multirregión para servicios ECS y todas sus dependencias
- Por iniciativa propia, desarrollé una librería compartida de Groovy para Jenkins para eliminar el boilerplate repetitivo — el proyecto llamó la atención del management, escaló a otros equipos y se integró con Backstage para dar a los desarrolladores un entorno de infraestructura listo desde el primer día
- Promovimos la cultura DevOps con demos internas y talleres, visibilidad que creció de forma orgánica a partir del trabajo de automatización
- Participé junto al equipo en la evaluación de la adopción de Kubernetes en producción, desplegando clústeres y realizando pruebas de concepto para explorar distintas configuraciones y herramientas

### Manager / Responsable Técnico
**StubHub** — *Remoto desde Bilbao | Sep 2019 – May 2020*
- Asumí la gestión del equipo de infraestructura de Bilbao de forma interina hasta consolidarme como responsable técnico oficial
- Trabajé codo a codo con el equipo de infraestructura de Shanghái para alinear el trabajo de ambos equipos en una plataforma común
- Continué impulsando la cultura DevOps y las buenas prácticas de automatización en todos los equipos

### Ingeniero de Infraestructura Senior
**StubHub** — *Híbrido | Jun 2018 – Sep 2019*
- Ejercí de punto de contacto entre los equipos de EEUU y Bilbao en el complejo ecosistema de despliegue de eBay — tendiendo puentes y obteniendo credenciales y permisos en sistemas a los que el equipo local no tenía acceso
- Me uní a la iniciativa de un compañero para desplegar Kubernetes con KOPS en AWS (antes de que existiera EKS) para la nueva plataforma del mercado primario en Asia — diseñada para escalar en ventanas de venta de entradas
- Contribuí a una iniciativa de Pivotal Cloud Foundry para unificar infraestructura AWS y on-prem bajo una capa común, trabajando con el equipo de San Francisco — el proyecto se pausó cuando el CTO que lo impulsaba dejó la empresa
- Los costes de la plataforma AWS legacy se redujeron un 50% (~$1M) identificando y eliminando desperdicios de forma sistemática — una de las diferentes contribuciones que derivó en una promoción a responsable técnico

### DevOps / Arquitecto de Sistemas Cloud
**BBVA Next Technologies (antes BEEVA)** — *Híbrido | Ene 2016 – Jun 2018*
- Como parte del equipo de infraestructura del centro de innovación de BBVA, ayudé a construir y automatizar la infraestructura cloud en AWS para Nimble Payments, una plataforma de pagos virtual, trabajando en sprints con el equipo de desarrollo con Terraform y Bamboo
- Trabajé en múltiples proyectos dentro del departamento de Cliente Externo — APIs serverless, sistemas IoT de cerraduras inteligentes, pipelines de Big Data y soluciones a medida con DynamoDB y Lambda para empresas como Naturgy y Securitas Direct. Los ingenieros DevOps de distintos proyectos y clientes nos coordinábamos de forma periódica para alinear buenas prácticas y patrones de Terraform
- Construimos una solución propia con Lambda y Python para el aprovisionamiento de nuevas cuentas AWS y su infraestructura base — antes de que existieran AWS Landing Zone, AFT o Control Tower
- Esta etapa fue clave en mi desarrollo profesional — rodeado de profesionales muy experimentados, aprendí y maduré lo suficiente como para ser promocionado año tras año hasta alcanzar el nivel de arquitecto

### Administrador de Sistemas / DevOps
**Rentalia Holidays S.L.** — *Madrid | Jun 2013 – Ene 2016*
- Migramos de bare metal a paravirtualización con OpenNebula, retirando servidores físicos y modernizando toda la infraestructura de producción — todo ello siendo un equipo de infraestructura de solo dos personas
- Introdujimos Puppet, Foreman, Ansible y Jenkins para llevar la gestión de configuración y CI/CD a una base de código legacy que mezclaba PHP/Symfony, Perl y Mojolicious — mi primer contacto real con el paradigma DevOps
- Identificamos y resolvimos un cuello de botella en la base de datos PostgreSQL, mejorando considerablemente el rendimiento y la fiabilidad del sistema
- La disponibilidad pasó del 97% al 99,9% como resultado de estas mejoras combinadas

### Responsable de IT
**Ferri Villena S.L.** — *Villena (Alicante) | Jul 2008 – Jun 2013*
- Gestioné las operaciones TI e infraestructura de una empresa industrial — servidores, ERP y redes internas
- Ejercí como asesor técnico del equipo directivo

## Habilidades

{% assign cats = site.data.skills | sort: 'order' %}
{% for category in cats %}
**{{ category.name }}**: {{ category.items | join: ", " }}
{% endfor %}

## Educación

**Grado en Ingeniería Informática**
*Universitat Oberta de Catalunya (UOC) — En curso (a tiempo parcial)*

**Ingeniería Técnica en Telecomunicaciones**
*Universidad de Alicante — 2003–2008 (No completada)*

## Idiomas

- **Español** – Nativo
- **Inglés** – Avanzado
- **Catalán** – Intermedio


_Última actualización: {{ site.time | date: "%Y-%m-%d" }}_
