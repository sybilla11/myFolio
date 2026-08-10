# myFolio

My personal portfolio & resume site — [Sybilla Dantas](https://www.linkedin.com/in/sybilla-dantas-41861213/), Staff Software Engineer.

Built with [Astro](https://astro.build): Hero, tech stack, experience timeline, projects, and a downloadable resume, all statically generated.

## Structure

```
src/
  components/   Header, Hero, TechStack, Experience, Projects, ProjectCard, About, Footer
  data/         projects.ts, experience.ts — content lives here, not hardcoded in markup
  layouts/      Layout.astro — page shell, meta tags, fonts
  pages/        index.astro — assembles the single page
  styles/       global.css — design tokens (light/dark via prefers-color-scheme)
public/
  Sybilla_Dantas_Resume.pdf
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to dist/
npm run preview   # serve the production build locally
```

## Deployment

Not yet deployed. Being a static Astro build, it's a natural fit for Render Static Site, Netlify, Vercel, or GitHub Pages — same shape as the [TRVLChamp](https://github.com/sybilla11/TRVLChamp) frontend deploy.

## History

Previously built on the [Simplefolio](https://github.com/cobidev/simplefolio) webpack template. Rebuilt on Astro in August 2026 after the old toolchain (webpack 4, webpack-dev-server 3, node-sass) hit multiple hard incompatibilities with current Node — see commit `306d882` for details.
