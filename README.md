# HorizonOS Website

**Live site:** https://therealhorizon.github.io/

## Root URL (`therealhorizon.github.io`)

GitHub only serves an org site at the root when the repository is named **`therealhorizon.github.io`**.

To move off `/horizonos.github.io/`:

1. Open [repo Settings → General](https://github.com/therealhorizon/horizonos.github.io/settings).
2. Under **Repository name**, rename to `therealhorizon.github.io`.
3. Wait for Pages to redeploy (Actions workflow runs automatically).

After the rename, update `assets/js/config.js` to `therealhorizon/therealhorizon.github.io`.

## Pages deploy

Pushes to `main` run `.github/workflows/deploy-pages.yml`. In **Settings → Pages**, source must be **GitHub Actions**.
