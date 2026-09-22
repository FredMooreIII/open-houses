# fredmooreiii.github.io (user site)

Routing only. Real pages live in the `open-houses` repo.

- `index.html` sends the bare domain to `/open-houses/` (home page).
- `404.html` sends any unknown URL on this domain to `/open-houses/404.html`.

Project repos (e.g. `open-houses`, `15-fenway`) always take priority for their own paths,
so this repo never overrides a live listing. When an old project repo is deleted,
its URLs fall through to the 404 landing page automatically.
