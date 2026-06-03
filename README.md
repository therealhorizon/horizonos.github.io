# HorizonOS Website

Static landing page for **HorizonOS** — a custom Linux distribution with a macOS-inspired desktop. Hosted on [GitHub Pages](https://pages.github.com/).

## GitHub Pages setup

1. Push this repo to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch `main` (or `master`) and folder **`/ (root)`**.
5. Save. This repo publishes at **https://therealhorizon.github.io/** (user Pages site).

## Customize

- Edit `index.html` for copy, features, and download links.
- Point release downloads to GitHub Releases URLs on the Download section buttons.
- Set your repo in `assets/js/config.js` so GitHub links work site-wide.

## Local preview

Open `index.html` in a browser, or:

```bash
npx --yes serve .
```

## License

MIT — adjust as needed for your project.
