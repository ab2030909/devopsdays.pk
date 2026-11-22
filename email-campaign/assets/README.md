# assets/

The email uses absolute HTTPS URLs pointing at the live site
(`https://www.devopsdays.pk/hero-logo.webp`), which is the recommended approach
for email.

If you prefer to self-host images on your email platform's CDN, drop local copies
here and update the `src` URLs in `index.html`:

- `hero-logo.webp` → copy of `/public/hero-logo.webp`

Keep all image URLs absolute and HTTPS. Do not reference local `assets/` paths
directly in the email — email clients cannot load local files.
