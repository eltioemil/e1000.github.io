# Emilio Ureña — CV Website

Minimal, fast personal site built with Jekyll using the "no-style-please" theme. Deployed on GitHub Pages.

## Features
- Unified Skills data in `_data/skills.yml` rendered on `cv.md` and `about.md`
- Monochrome emojis via OpenMoji font (`assets/fonts/OpenMoji-Black.woff2`)
- Dark mode toggle with cookie-based preference storage
- Light-themed code blocks
- Footer with license and theme attribution
- Floating "Back to top" button
- Cookie notice with dedicated privacy policy
- **Dual language support (EN/ES)** — all main pages available in English and Spanish
- **JS-based language detection** — auto-redirects on first visit based on browser language, preference stored in a cookie

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
- `_data/menu.yml`: English navigation menu
- `_data/menu_es.yml`: Spanish navigation menu
- `_includes/`: shared partials (`head.html`, `footer.html`, `cookie_notice.html`, `lang_switcher.html`, etc.)
- `_layouts/`: page layouts (`default.html`, `page.html`, `home.html`)
- `assets/css/main.scss`: site styles (imports theme and custom rules)
- `assets/js/back-to-top.js`: scroll-to-top button logic
- `assets/js/theme-toggle.js`: dark mode toggle with cookie storage
- `assets/js/lang-detect.js`: language detection and preference with cookie storage
- `en/`: English content pages (`index.md`, `cv.md`, `about.md`, `projects.md`, `contact.md`)
- `es/`: Spanish content pages (same structure, served at `/es/*`)
- `cookies.md`: cookie policy page
- `license.md`: license page

## Dual language

Pages link to their counterpart via `lang` and `lang_ref` front matter:

```yaml
lang: en        # or 'es'
lang_ref: cv    # slug shared between EN and ES versions
```

The `lang_switcher.html` include uses these to find and render the EN · ES toggle on each page. The `lang-detect.js` script reads a `lang-preference` cookie and auto-redirects on first visit based on `navigator.language`. Clicking the switcher updates the cookie.

**To add a new translated page:** create the file in both `en/` and `es/` with matching `lang_ref` values and explicit `permalink` front matter.

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

## License & attribution
- Site content: MIT (see `license.md`)
- Theme: [no-style-please](https://github.com/riggraz/no-style-please) by Riccardo Graziosi (MIT)
- Emoji font: [OpenMoji Black](https://github.com/hfg-gmuend/openmoji) (CC BY-SA 4.0)
