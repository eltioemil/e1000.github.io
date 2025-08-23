# Emilio Ureña — CV Website

Minimal, fast personal site built with Jekyll using the "no-style-please" theme. Deployed on GitHub Pages with automated CI/CD testing.

## Features
- Unified Skills data in `_data/skills.yml` rendered on `cv.md` and `about.md`
- Monochrome emojis via OpenMoji font (`assets/fonts/OpenMoji-Black.woff2`)
- Dark mode toggle with cookie-based preference storage
- Light-themed code blocks
- Footer with license and theme attribution
- Floating "Back to top" button
- Cookie notice with dedicated privacy policy

## Local development
You can run locally either with Docker (recommended) or with a local Ruby toolchain.

### With Docker
Requirements: Docker and docker-compose.

```bash
docker compose up --build
```

- Site: http://localhost:4000
- Auto reload on changes (mounted volume)

### With Ruby (optional)
Requirements: Ruby 3.4+, Bundler.

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0
```

## Project structure
- `_config.yml`: site metadata, theme config
- `_data/skills.yml`: single source of truth for skills (ordered categories)
- `_includes/`: shared partials (`head.html`, `footer.html`, `cookie_notice.html`, etc.)
- `_layouts/`: page layouts (`default.html`, `page.html`, `home.html`)
- `assets/css/main.scss`: site styles (imports theme and custom rules)
- `assets/js/back-to-top.js`: scroll-to-top button logic
- `assets/js/theme-toggle.js`: dark mode toggle with cookie storage
- `cv.md`, `about.md`, `projects.md`, `contact.md`: content pages
- `cookies.md`: cookie policy page
- `license.md`: license page

## Editing skills
Update `_data/skills.yml`. Each category has a name, `items`, and `order` used to sort display order.

Example:
```yaml
- name: Cloud & Platforms
  order: 1
  items:
    - AWS
    - GCP
    - Kubernetes
```

## Emojis
OpenMoji Black is loaded via `@font-face` in `assets/css/main.scss`. Wrap emojis with `.emoji` or `.emoji-large` if you need explicit sizing; otherwise they will render inline as text using the OpenMoji font fallback.

Font file expected at `assets/fonts/OpenMoji-Black.woff2`.

## CI/CD Pipeline

The site uses GitHub Actions for automated testing and deployment:

### On Pull Requests:
- **Jekyll Build Test** - Validates site builds correctly
- **HTML Validation** - Checks markup quality and links
- **Accessibility Testing** - WCAG 2.1 AA compliance with Pa11y
- **Lighthouse Audit** - Performance, SEO, and best practices
- **Security Scan** - Vulnerability scanning with Trivy

### On Main Branch:
- **Automated Deployment** - Builds and deploys to GitHub Pages
- **Artifact Storage** - Build artifacts saved for debugging

All tests must pass before PRs can be merged, ensuring site quality and preventing breakages.

## License & attribution
- Site content: MIT (see `license.md`)
- Theme: [no-style-please](https://github.com/riggraz/no-style-please) by Riccardo Graziosi (MIT)
- Emoji font: [OpenMoji Black](https://github.com/hfg-gmuend/openmoji) (CC BY-SA 4.0)
