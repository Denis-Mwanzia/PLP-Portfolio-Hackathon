---
noteId: 'a336b3c0fd4411f0ab8e71457aa752c7'
tags: []
---

# Portfolio Code Review — Senior Dev Review

**Project:** Denis Mwanzia Portfolio  
**Stack:** React, Vite, Styled Components, Tailwind, Framer Motion  
**Review date:** January 2025

---

## Executive summary

The portfolio is well structured with clear sections, theme support, accessibility considerations, and a modern stack. The following review covers **bugs**, **missing pieces**, **performance**, **consistency**, and **improvement opportunities**. Items are ordered by impact (critical → high → medium → low).

---

## Critical issues

### 1. **ParallaxShapes — Rules of Hooks violation**

**File:** `src/components/ParallaxShapes.js`

`useTransform` is called inside a `.map()` callback. Hooks must run at the top level, in the same order every render. Calling `useTransform` in a loop breaks this and can cause subtle bugs or crashes.

```javascript
// Current (invalid):
shapes.map((s, idx) => {
  const y = useTransform(scrollYProgress, [0, 1], [factor * -1, factor]);
  // ...
});
```

**Fix:** Either:

- Limit to a fixed number of shapes (e.g. 3) and call `useTransform` three times at the top level, or
- Use a single `useTransform` (or `useScroll`) and derive all Y values from one shared progress value (no hooks inside the loop).

---

### 2. **LazyImage — Observer may never attach**

**File:** `src/components/LazyImage.js`

The `IntersectionObserver` is set up in a `useEffect` with an empty dependency array. On the first run, `imgRef.current` can still be `null`, so `observer.observe(imgRef.current)` is never called and images never load when they enter the viewport.

**Fix:** Depend on the ref (e.g. via a state that flips when the container is mounted) or use a callback ref so the effect runs when the element is available. Optionally use a `ResizeObserver`/callback ref pattern so you re-run the effect when the ref is set.

---

## High priority

### 3. **Duplicate entry files**

You have two entry points:

- `index.html` loads `main.jsx` (used).
- `src/index.js` also creates a root and renders the app (unused).

**Fix:** Remove `src/index.js` to avoid confusion and keep a single entry (`main.jsx`), or document why both exist.

---

### 4. **Inconsistent / duplicate SEO and schema URLs**

**File:** `src/App.js`

- `siteUrl` / `canonicalUrl` / `previewImage` use `https://www.denismwanzia.com` (or env).
- JSON-LD Person: `url: 'https://denismwanzia.netlify.app/'`, `image: 'https://denis-mwanzia-portfolio.netlify.app/assets/passport.jpg'`.
- WebSite schema: `url: 'https://denismwanzia.netlify.app/'`.

So you have three different base URLs (denismwanzia.com, denismwanzia.netlify.app, denis-mwanzia-portfolio.netlify.app). Search engines and social previews work best with one canonical base URL.

**Fix:** Use a single base URL (e.g. from `import.meta.env.VITE_SITE_URL` or a constant) for:

- Canonical link
- `og:url`, `og:image`
- Twitter meta
- Both JSON-LD blocks (Person + WebSite)

Then set that same URL in Netlify (or env) for production.

---

### 5. **Hero — Duplicate CSS property**

**File:** `src/components/Hero.js` (SecondaryButton)

```javascript
&:hover::after {
  opacity: 0.2;
  opacity: 1;  // overrides previous
}
```

**Fix:** Keep a single intent (e.g. `opacity: 1` and use `::after` for the hover overlay, or remove the duplicate).

---

### 6. **About — Incorrect aria-hidden**

**File:** `src/components/About.js`

`<FadeMask key={rowIndex} aria-hidden="false">` — for decorative wrappers, `aria-hidden="true"` is appropriate. `"false"` is redundant and can confuse assistive tech.

**Fix:** Use `aria-hidden="true"` for the fade mask, or omit the attribute if the content inside is meaningful (then ensure the mask is purely visual).

---

### 7. **Resume — Tab semantics**

**File:** `src/components/Resume.js`

Tab buttons use `className={activeTab === index ? 'active' : ''}` but no `aria-selected`. Screen readers benefit from `aria-selected={activeTab === index}` on the active tab and a proper `role="tablist"` / `role="tab"` / `role="tabpanel"` structure.

**Fix:** Add `role="tablist"` to the tab container, `role="tab"` and `aria-selected` to each tab, and `role="tabpanel"` and `aria-labelledby` (or `id`) to the tab panels.

---

### 8. **External links — Missing rel**

**File:** `src/components/Hero.js`

`PrimaryButton` and `SecondaryButton` are `<a>`. When they point to external URLs (e.g. resume PDF or `#contact`), external ones should use `rel="noopener noreferrer"` and `target="_blank"` where appropriate. Social links in Hero do use `target="_blank"`; ensure any other external `<a>` also have `rel="noopener noreferrer"`.

---

## Medium priority

### 9. **Scroll handlers — No throttling**

**Files:** `src/components/ScrollProgress.js`, `src/components/Header.js`

Scroll listeners call `setState` on every scroll event, which can cause many re-renders on fast scroll.

**Fix:** Use your existing `src/utils/performance.js` `throttle` (e.g. 100–150 ms) around the scroll handler, or use `requestAnimationFrame` to batch updates.

---

### 10. **Theme — No system preference**

**File:** `src/context/ThemeContext.js`

Theme is restored from `localStorage` only. Users who prefer dark/light at OS level get no initial respect for `prefers-color-scheme`.

**Fix:** On first load (no saved theme), read `window.matchMedia('(prefers-color-scheme: dark)').matches` and set initial theme to `'dark'` or `'light'`. Optionally subscribe to `prefers-color-scheme` changes to update theme when the user changes system preference (if you want “auto” behavior).

---

### 11. **Single source of truth for data**

**Files:** `src/utils/constants.js` vs `src/components/Resume.js`, `src/components/Header.js`

- Resume defines its own `educationData`, `experienceData`, `certificationsData`, `skillsData` instead of importing from `constants.js` (which has `EDUCATION_DATA`, `EXPERIENCE_DATA`, etc.).
- Header defines its own `navItems` instead of using `NAVIGATION_ITEMS` from constants.

**Fix:** Import from `constants.js` in Resume and Header (and adjust keys/icon usage if needed) so data lives in one place. Update constants when you add/remove resume or nav items.

---

### 12. **Duplicate project in PROJECTS_DATA**

**File:** `src/utils/constants.js`

“Kitui Reforest AI” appears twice: once as `fullstack3` and once as `ai2`, with the same content. That duplicates the project in the “All” view and skews filter counts.

**Fix:** Keep a single entry (e.g. `fullstack3`) and assign one primary category (e.g. `fullstack`). If you need it in both “Fullstack” and “AI” filters, add a `categories: ['fullstack', 'ai']` (or similar) and update the filter logic instead of duplicating the object.

---

### 13. **Favicon and PWA icons**

- **Root `index.html`** uses `href="/vite.svg"` for the favicon (Vite default).
- **`public/manifest.json`** references `favicon.ico`, `logo192.png`, `logo512.png`, which are not present under `public/`.

**Fix:** Add a real favicon (e.g. `public/favicon.ico` or `public/favicon.svg`) and update `index.html` to point to it. Add 192 and 512 PNG icons in `public/` and keep manifest paths in sync, or remove/comment those entries in the manifest until the files exist.

---

### 14. **Font loading blocks render**

**File:** `src/index.css`

Fonts are loaded with `@import url("https://fonts.googleapis.com/...")`. CSS `@import` blocks rendering until the resource is fetched.

**Fix:** Load the same font URL via a `<link rel="preconnect">` and `<link rel="stylesheet">` in `index.html`, and remove the `@import` from CSS. Optionally add `font-display: swap` in the URL (e.g. `&display=swap`) to avoid invisible text.

---

### 15. **Unused code**

- **`src/utils/animations.js`** — Not imported anywhere. Either use these variants in components (e.g. Hero, About, Projects) or remove the file.
- **`src/utils/performance.js`** — `debounce`/`throttle` are not used. Use them for scroll/resize handlers (see §9) or remove if you rely on another approach.
- **`src/components/LoadingSpinner.js`** — Not used. Use it for async states (e.g. before app shell or form submit) or remove.
- **Custom hooks** — `useScrollPosition`, `useIntersectionObserver`, `useLocalStorage` are never imported. The app uses `react-intersection-observer`’s `useInView` and inline theme/localStorage logic. Either adopt these hooks where they fit or remove them to reduce noise.

---

### 16. **ErrorBoundary — Retry semantics**

**File:** `src/components/ErrorBoundary.js`

`handleRetry` resets state to `hasError: false` but does not re-mount children or trigger a re-render of the failing subtree. So “Try Again” may not actually retry the failing code.

**Fix:** Either give the ErrorBoundary a `key` that changes on retry (so children remount), or expose a callback that the parent uses to reset some data/route and then remount the tree. Document the intended behavior for users.

---

### 17. **Footer — Placeholder social links**

**File:** `src/components/Footer.js`

Twitter and Instagram use `href="#"`. That creates useless links and can confuse users.

**Fix:** Use real profile URLs, or remove those two from the footer (and from any shared social config) until you have profiles.

---

### 18. **constants.js — CERTIFICATIONS_DATA incomplete**

**File:** `src/utils/constants.js`

`CERTIFICATIONS_DATA` has 3 items; `Resume.js` uses 5 certifications (adds Full-Stack MERN and ICT Graduate). If you move to a single source of truth (§11), ensure constants include all five and that Resume only imports and maps over them.

---

## Low priority / polish

### 19. **Skip-to-content link**

For keyboard and screen-reader users, a “Skip to main content” link at the top of the page improves accessibility. It’s typically the first focusable element and jumps to `#main-content` or the main landmark. Add one in `App.js` or `Header.js` and ensure the target `id` exists on the main container.

### 20. **Tailwind and CSS variables**

**File:** `tailwind.config.js`

`theme.extend` is empty. You already use CSS variables (e.g. `--primary-blue`, `--container-xl`) in styled-components and index.css. You could expose the same variables in Tailwind’s theme (e.g. `colors`, `spacing`) so utility classes stay consistent with the rest of the design.

### 21. **SectionDivider color**

**File:** `src/components/SectionDivider.js`

The SVG uses `currentColor` and `fillOpacity="0.06"`. If the divider sits on a background that doesn’t inherit the right text color, consider a CSS variable (e.g. `--divider-fill`) so it adapts to theme.

### 22. **Form success/error colors**

**File:** `src/components/Contact.js`

`FormMessage` uses hardcoded green/red (`#d4edda`, `#155724`, etc.). In dark theme they may clash. Consider using semantic variables (e.g. `--color-success-bg`, `--color-error-bg`) that you set per theme in `index.css`.

### 23. **Resume PDF path**

**File:** `src/components/Resume.js` (certificate PDFs)

One certificate uses a URL with encoded spaces: `denis%20Full-Stack%20Development%20...`. Prefer a filename without spaces (e.g. `denis-fullstack-mern-certificate.pdf`) and reference it without encoding to avoid path mistakes.

### 24. **Tests and script**

**File:** `package.json`

The script `"test": "react-scripts test"` points to Create React App. The project uses Vite; that script will not work as-is. There are no test files. Either add Vite-compatible testing (e.g. Vitest + React Testing Library) and a `test` script, or remove/update the script and add a single smoke test later.

---

## Missing or optional features

| Area           | Suggestion                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **404**        | Netlify redirects all routes to `index.html`. You could add a simple “Page not found” view when `window.location.pathname` doesn’t match any known route (optional for a single-page portfolio). |
| **Sitemap**    | `public/sitemap.xml` exists; ensure its base URL and page list match your canonical domain and any future routes.                                                                                |
| **Analytics**  | No analytics. If you want traffic/events, add a small script or tag (e.g. Google Analytics, Plausible) and respect user privacy (e.g. consent or minimal data).                                  |
| **Open Graph** | You have `og:image`; ensure the image URL is absolute and the file is available at that URL when shared.                                                                                         |

---

## Summary checklist

| Priority | Item                                   | Action                                                              |
| -------- | -------------------------------------- | ------------------------------------------------------------------- |
| Critical | ParallaxShapes hooks in loop           | Refactor so hooks are at top level                                  |
| Critical | LazyImage observer ref timing          | Fix ref/effect so observer attaches when node exists                |
| High     | Duplicate index.js / main.jsx          | Remove or document index.js                                         |
| High     | Inconsistent SEO/schema URLs           | Single base URL for all meta and JSON-LD                            |
| High     | Hero SecondaryButton duplicate opacity | Keep one intended value                                             |
| High     | About FadeMask aria-hidden             | Use true for decorative                                             |
| High     | Resume tab semantics                   | Add ARIA roles and aria-selected                                    |
| High     | External links rel                     | noopener noreferrer where needed                                    |
| Medium   | Scroll throttling                      | Use throttle for scroll handlers                                    |
| Medium   | Theme + prefers-color-scheme           | Respect system preference when no saved theme                       |
| Medium   | Data duplication                       | Use constants in Resume & Header                                    |
| Medium   | Duplicate Kitui project                | Single entry in PROJECTS_DATA                                       |
| Medium   | Favicon / PWA icons                    | Add files and fix references                                        |
| Medium   | Font loading                           | Preconnect + link in HTML, avoid @import                            |
| Medium   | Unused files/hooks                     | Use or remove animations, performance, LoadingSpinner, custom hooks |
| Medium   | ErrorBoundary retry                    | Make retry actually re-run failing tree                             |
| Medium   | Footer social placeholders             | Real URLs or remove                                                 |
| Low      | Skip-to-content, Tailwind theme, tests | Optional improvements                                               |

---

If you want, I can propose concrete code changes for the critical and high-priority items (e.g. ParallaxShapes, LazyImage, SEO URLs, and scroll throttling) in the next step.
