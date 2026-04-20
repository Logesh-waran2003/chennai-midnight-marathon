# V5 — Pixel-Perfect Replica Build Plan

## Goal
Exact clone of https://bangalore.bharatmidnightmarathon.run/ adapted for Chennai.
NOT an interpretation — a structural clone.

## Reference Data Collected
- Full-page screenshots: `.playwright-cli/ref/`
- Design spec: `src/tiers/v4/REFERENCE-SPEC.md`
- Local images: `public/images/v4/` (reuse for v5)
- Page content scraped via browser-harness (in conversation history)

## Design System (from actual extraction)
- Body: white bg `rgb(255,255,255)`, dark gray text `rgb(51,51,51)`
- Accent: orange `rgb(245,98,33)` / `#f56221`
- Display font: **Grechen Fuemen** (cursive) — 62px/600
- Heading font: **Poppins** — 20-35px/500-600
- Body font: **Archivo** — 16px/400
- Dark sections: `rgb(2,1,6)` with background images
- Mission text: light purple `rgb(218,177,217)`
- WordPress/Elementor-style layout — NOT minimal

## Key Differences from V4
V4 was built as a clean, minimal interpretation. V5 must match:
1. Dense, content-rich WordPress layout feel
2. Overlapping elements, background images on sections
3. Partner carousel (not static grid)
4. Thick section dividers, proper WordPress-style padding
5. Full-width sections with proper gutters
6. Traditional event website density — busy, informational

## Build Approach
1. Use browser-harness to extract exact HTML structure of each section
2. Extract exact CSS (padding, margins, backgrounds, overlays)
3. Rebuild section-by-section, comparing screenshots after each
4. Use local images from `public/images/v4/`
5. Adapt text content for Chennai (same structure, Chennai details)

## Pages to Build (from reference nav)
1. Homepage (hero + partners + WHAT A NIGHT + missions + story)
2. Race Events
3. Registration Terms
4. Running for Rookies
5. Prize Money & Awards
6. Medical Advisory
7. Celebrity Ambassadors
8. Partnership Opportunities
9. Partners
10. About CMM
11. About RBITC
12. Race Route Maps (6 sub-pages)
13. FAQs
14. Contact Us
15. Refund Policy
16. Privacy Policy
17. Terms & Conditions

## Status
- [ ] Extract HTML/CSS structure via browser-harness
- [ ] Build homepage section-by-section
- [ ] Compare and iterate homepage
- [ ] Build inner pages (shared layout + per-page content)
- [ ] Final comparison pass
