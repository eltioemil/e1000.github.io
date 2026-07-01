---
layout: page
title: Proyectos y Logros
permalink: /es/projects/
lang: es
lang_ref: projects
---

Algunos de los proyectos clave en los que he trabajado a lo largo de mi carrera en DevOps, ingeniería de plataformas e infraestructura cloud.

## Herramientas de Gestión de Organización AWS en T-Systems

**Tecnologías:** Python, AWS Lambda, DynamoDB, AWS Organizations, Billing Conductor, ECS, Security Hub, Jira API, Terraform

Automatización a medida para una organización AWS de más de 350 cuentas de la Generalitat de Catalunya, cubriendo los huecos donde AWS todavía no ha implementado soluciones globales. Herramientas destacadas:

- **Automatización de Billing Conductor** — Lambda cross-org que mantiene cada cuenta asignada al grupo de facturación correcto en base a tags, corrige automáticamente los desajustes seguros e informa a finanzas y propietarios de cuentas de las discrepancias
- **ECS Instance Scheduler** — sistema de scheduling basado en DynamoDB similar al scheduler oficial de AWS para EC2 y RDS (que no cubre ECS) — limitado a entornos no productivos mediante org unit IDs, los servicios se adhieren por tags, escalan a 0 por la noche y los fines de semana, y el número de réplicas se almacena para restaurar el estado exacto al día siguiente
- **Security Hub → Jira** — escaneo mensual de hallazgos críticos y de alta severidad en toda la organización, creando tickets de Jira asignados al responsable de seguridad de cada departamento mediante una tabla de consulta en DynamoDB

**Resultados:**
- El equipo de finanzas obtiene datos de facturación precisos por departamento sin conciliación manual
- Las cargas de trabajo ECS en entornos no productivos se apagan fuera del horario laboral, reduciendo costes
- Los Security Hub Findings se enrutan automáticamente al responsable correcto cada mes

## Operaciones de Plataforma Kubernetes en BlueLabs

**Tecnologías:** GCP, GKE, Argo CD, Terraform, Python

Entorno GKE en GCP con clústeres aislados por propósito y GitOps workflows con Argo CD. Desarrollé un servicio en Python para monitorizar de forma continua los avisos de interrupción de nodos spot y drenar los pods de forma ordenada antes del apagado, protegiendo las cargas de trabajo asíncronas de pérdidas de datos en tránsito.

**Resultados:**
- Las cargas de trabajo corrieron íntegramente en nodos spot sin impacto en la fiabilidad del servicio
- El drenado ordenado de pods eliminó el riesgo de pérdida de datos por apagados abruptos en servicios asíncronos
- Los GitOps workflows aportaron consistencia y trazabilidad a los deployments en todos los entornos

## Stack de Observabilidad en Kubernetes en BlueLabs

**Tecnologías:** Loki, Grafana, Mimir, Prometheus, Thanos, Fluent-bit, Kubernetes

Proyecto conjunto del equipo para montar un clúster de observabilidad centralizado que agregaba logs y métricas del resto de clústeres GKE. Cada integrante se responsabilizó de una parte — recogida de logs con Fluent-bit hacia Loki, métricas con Prometheus y Thanos hacia Mimir, y Grafana para la visualización. Todo desplegado en nodos spot para reducir costes.

**Resultados:**
- Control total sobre retención, reglas de alertas y configuración — imposible con soluciones gestionadas
- Cada equipo podía instrumentar y visualizar sus propios servicios sin las limitaciones de un proveedor
- Mejor depuración e investigación de incidentes en todos los entornos

## Gestión Automatizada de Dominios a Escala en BlueLabs

**Tecnologías:** Cloudflare, BYOIP, Cloudflare for SaaS, Python, Retool

El responsable técnico inició el desarrollo del sistema; yo tomé el relevo y lo llevé a producción. El servicio en Python fue diseñado desde el principio como una API — gestionando el aprovisionamiento de zonas en Cloudflare, monitorizando su disponibilidad en tiempo real y orquestando el failover automático. El panel de control en Retool fue uno de sus consumidores, dando al equipo una interfaz visual para gestionar el ciclo de vida de las zonas. También lideré la iniciativa BYOIP para importar un bloque /24 propio a Cloudflare.

**Resultados:**
- El failover automatizado eliminó por completo la intervención manual durante los incidentes
- Las herramientas de gestión del ciclo de vida mantuvieron más de 100 zonas bajo control

## Plataforma de Infraestructura Self-Service en Clarivate

**Tecnologías:** AWS, Terraform, Jenkins, Groovy, ECS Fargate, Backstage

Plataforma de automatización sobre Jenkins con librerías Groovy reutilizables para desplegar infraestructura con Terraform y aplicaciones en ECS. Responsable de su diseño, desarrollo e integración con Backstage para que cualquier equipo pudiera operar de forma autónoma.

**Resultados:**
- Los equipos de desarrollo podían desplegar su propia infraestructura sin depender del equipo de plataforma
- El tiempo de aprovisionamiento manual se redujo un 80%
- Las prácticas de infraestructura como código se extendieron a toda la organización

## Optimización de Costes Cloud en StubHub

**Tecnologías:** AWS, GCP, FinOps, CloudFormation, Terraform

Responsable de una iniciativa FinOps que recortó los costes cloud anuales un 50%, ahorrando más de $1M — un logro que contribuyó directamente a una promoción a responsable técnico. Alcance completo: definición de una estrategia de infraestructura cloud completamente automatizada y migración de sistemas legacy de on-prem a AWS.

**Resultados:**
- Los costes cloud se redujeron a la mitad
- Conseguimos una disponibilidad del 99,9%
- Habilitamos deployments conformes con PCI y la expansión internacional de la plataforma

## Liderazgo Técnico y de Equipos

A lo largo de mi carrera he sido con frecuencia la persona a la que los compañeros acuden cuando se quedan bloqueados, independientemente del cargo. En StubHub ejercí esto de forma oficial como manager y mentor; en el resto de empresas ha sido algo natural — ayudando a ingenieros senior y junior a resolver problemas, tomar decisiones de arquitectura y mejorar la calidad sin que nadie me lo pidiera expresamente.

## ¿Quieres saber más?

Visita mi [GitHub](https://github.com/{{ site.github_username }}) o [LinkedIn](https://www.linkedin.com/in/{{ site.linkedin_username }}) para más sobre mi trabajo e ideas. También estoy en [Mastodon](https://fosstodon.org/@{{ site.fosstodon_username }}).
¿Te interesa colaborar o tienes un reto de infraestructura entre manos? [¡Hablamos!](/es/contact/)
