# Kyle Babington Landscaping

One-page marketing site for residential landscaping leads in Indianapolis. Static React + Vite + Tailwind CSS v4. Deployable to Cloudflare Pages.

## Configure before going live

Edit [`src/config/site.ts`](src/config/site.ts):

| Key | Placeholder | Purpose |
|-----|-------------|---------|
| `email` | `YOUR_EMAIL_HERE` | FormSubmit delivery address (endpoint is derived from this) |
| `phone` | `YOUR_PHONE_HERE` | Shown in footer only after replaced |
| `schedulingUrl` | `YOUR_CAL_URL_HERE` | Cal.com / Calendly consultation link |

Do not invent contact details. Leave phone/scheduling as placeholders until real values exist.

## FormSubmit setup

1. Set `siteConfig.email` to the real inbox.
2. Submit the contact form once from the live (or preview) site.
3. FormSubmit sends an **activation / confirmation email** to that address — open it and confirm.
4. Later submissions will arrive as emails. CAPTCHA remains enabled (do not add `_captcha: false` unless you intentionally change that later).

The form posts JSON to `https://formsubmit.co/ajax/{email}` with:

- `Content-Type: application/json`
- `Accept: application/json`
- `_honey` honeypot
- `_subject` and `_template: table`

## Add real photos

See [`public/images/README.md`](public/images/README.md). Image containers are already wired for optional `src` values.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite (or None)
