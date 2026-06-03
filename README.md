# HorizonOS Website

Static landing page for **HorizonOS** — a custom Linux distribution with a macOS-inspired desktop.

**Live site:** https://therealhorizon.github.io/horizonos.github.io/

This repository is an organization **project** site (not `therealhorizon.github.io`), so Pages publishes under `/horizonos.github.io/`.

## GitHub Pages

Deployment uses the **Deploy GitHub Pages** GitHub Action on every push to `main`.

If the site does not update:

1. Open [Settings → Pages](https://github.com/therealhorizon/horizonos.github.io/settings/pages).
2. Set **Build and deployment → Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Re-run the workflow under the **Actions** tab if needed.

For a root URL (`https://therealhorizon.github.io/` with no path), create a separate org repo named `therealhorizon.github.io` and publish there.

## Customize

- Edit `index.html` for copy, features, and download links.
- Point release downloads to GitHub Releases URLs on the Download section buttons.
- GitHub links are set in `assets/js/config.js`.

## Local preview

```bash
npx --yes serve .
```

## License

See `LICENSE` in this repository.
