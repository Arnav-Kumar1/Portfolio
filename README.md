# Arnav Kumar — Portfolio (v2)

Personal portfolio site for Arnav Kumar — *Generalist Founding Operator*.

**Live:** [portfolio-arnav-kumar.vercel.app](https://portfolio-arnav-kumar.vercel.app)

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://www.contentlayer.dev/) — MDX-based content for project case studies
- [next/og](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) — dynamic OG image + favicon generation
- Deployed on [Vercel](https://vercel.com/)

## Structure

```
app/
├── page.tsx                  # Minimal hero
├── layout.tsx                # Root layout + metadata
├── icon.tsx                  # Dynamic favicon
├── opengraph-image.tsx       # Dynamic OG card
├── about/                    # Bio + experience + skills + education
├── projects/                 # Project listing + slug detail pages
│   ├── page.tsx
│   └── [slug]/
└── contact/                  # Email + LinkedIn + GitHub
content/
└── projects/                 # MDX case studies (one per project)
public/
└── fonts/                    # CalSans display font
```

## Local development

```bash
pnpm install
pnpm dev
```

App opens at `http://localhost:3000`.

## Credits

Design inspired by and forked from [chronark.com](https://github.com/chronark/chronark.com) by Andreas Thomas ([MIT-licensed](https://github.com/chronark/chronark.com/blob/main/LICENSE)). The Upstash Redis pageview counter from the original has been removed; all content is original to this site.

## Contact

- **Email:** arnav9637@gmail.com
- **LinkedIn:** [linkedin.com/in/arnav-kumar1](https://www.linkedin.com/in/arnav-kumar1/)
- **GitHub:** [github.com/Arnav-Kumar1](https://github.com/Arnav-Kumar1)
