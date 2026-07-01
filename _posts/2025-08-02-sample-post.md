---
layout: post
title: "New personal site, again..."
---

Not my first. Definitely not my last.

I've lost count of how many times I've rebuilt my personal site. It's almost a tradition at this point — every few years I look at what I have, decide it's embarrassing, and start over.

This time I also changed the domain. I moved from `eltioemil.es` to `e1000.es`, which requires some explanation. My ideal domain would have been `emil.io` — clean, short, `.io` makes it feel vaguely technical. But some other Emilio got there first. Respect, honestly. So `e1000` it is — `1000` replaces the `mil` in Emilio, since `mil` means 1000 in Spanish. `emil.io` → `e1000.io` → close enough.

For the actual site, I went with the [no-style-please](https://github.com/riggraz/no-style-please) Jekyll theme. My previous site had too many attempts at design — the kind of thing you build when you think you can pull it off. I'm not a designer and it showed. This theme solved that by making all the design decisions for me.

I set it up on GitHub Pages and added Docker Compose for local testing. On top of the base theme, I added a few small things:

- **Theme toggle** — JavaScript that detects your browser's light/dark preference and stores your choice in a cookie
- **Cookie notice** — JavaScript-driven dismissable banner, plus a cookie policy page, because now I'm storing cookies
- **Back to top button** — JavaScript, for longer pages
- **Custom 404 page** — the GitHub Pages default one is rough

That's it. Nothing groundbreaking. Just a site. Have a look around and feel free to [get in touch](/contact/) if you want to.
