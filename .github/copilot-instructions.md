<!-- .github/copilot-instructions.md - guidance for AI coding agents working on this repo -->
# Repo overview

- This repository is a simple, static GitHub Pages site (HTML + CSS). There is no build system, package manager, or server-side code. Content is organized into `Week-*` folders; each folder typically contains one or more standalone HTML pages and a matching CSS file or an `images` folder.

# What to know up front

- Deploys via GitHub Pages from the `main` branch (standard static site). There are no CI/build steps to run before publishing.
- Editing is done directly in the HTML/CSS files. Most pages are standalone and reference local CSS files (e.g., `Week-3/cv.html` uses `Week-3/cv.css`). Some global styles live at the repo root (`styles.css`, `PageContent.css`, `Navigation.css`).
- Navigation is duplicated across weeks via small HTML files (e.g., `NavigationBar.html` in Week folders). There is no templating system — changing navigation usually means editing each copy where needed.

# Common files and examples

- Root-level:
  - `README.md` — minimal repository description.
  - `styles.css`, `PageContent.css`, `Navigation.css` — shared/global styles used by pages across weeks.
- Example pages to reference when making edits:
  - `Week-3/cv.html` and `Week-3/cv.css` — resume page (HTML + colocated CSS).
  - `Week-6/photo-shoot-effect.html` and `Week-6/photo-shoot-effect.css` — demonstrates visual effects and image layout patterns.
  - `Week-8/contact.html` — contact page example.

# Patterns and conventions (discoverable)

- Colocated CSS: Many pages have a CSS file inside the same Week folder (e.g., `Week-3/cv.css`). Prefer editing those files when changing a single-week page.
- Shared styles: When multiple pages share the same look, prefer updating the root `styles.css` or `PageContent.css` so changes propagate.
- Images: Image folders are named either `images` or `image` and live inside the Week folders. Preserve relative paths when moving or renaming assets.
- Filenames with special characters: Some folders (e.g., `Week-4/Au&Vid/`) include `&` — be careful with URL encoding when referencing or linking to these paths.

# How to run & preview locally (useful commands)

1. Quick preview by opening an HTML file directly in the browser (double-click). This works for static pages but may break when using relative paths that expect a server.
2. Recommended: run a simple local HTTP server from the repo root. In PowerShell (Windows), run:

```powershell
# from repository root
py -m http.server 8000
# or if python is on PATH as 'python'
python -m http.server 8000
```

Then open `http://localhost:8000/Week-8/contact.html` (or any target file). This replicates the GitHub Pages environment for relative links.

# Contribution notes for AI agents

- Do not introduce build tools or package managers unless the user requests it — the site is intentionally simple.
- Preserve relative asset paths and the directory layout when moving or renaming files.
- When changing navigation, look for `NavigationBar.html` and other similarly named files across `Week-*` folders; update consistently or propose a single-source refactor to the user.
- Keep changes minimal and focused per PR: edit the specific Week folder and any shared CSS files that the page references.

# Tests, linting, and CI

- No automated tests, linters, or CI configs were found. Before opening a PR, validate manually by previewing the changed pages locally.

# Commit and PR guidance

- Use clear commit messages describing the file changes (e.g., "Week-3: update cv styling to improve mobile layout").
- Create a single branch per change and open a Pull Request targeting `main`. Include screenshots or a short note with the local preview URL (e.g., `http://localhost:8000/Week-3/cv.html`).

# When to ask the user for clarification

- If a requested change impacts many copies of navigation or shared layout, ask whether to update every copy or perform a refactor (e.g., consolidate navigation into a single include template).
- Ask before renaming or moving large numbers of image files (to avoid breaking existing pages that reference them).

# Where to look for examples

- `Week-3/` — example of a colocated CSS + HTML page.
- `Week-6/` — demonstrates CSS effects and image layouts.
- `Week-7/NavigationBar.html`, `Navigation.css` — examples of site navigation patterns.

If anything here is unclear or you want me to include more examples or a different level of detail (e.g., a proposed refactor plan), tell me which areas to expand and I'll iterate.
