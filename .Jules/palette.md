
## 2026-04-14 - Mobile Menu Button Accessibility
**Learning:** Discovered a pattern where icon-only interactive elements (like the mobile menu toggle) lack ARIA labels and focus-visible states, reducing accessibility for screen reader and keyboard users.
**Action:** Applied 'aria-label', 'aria-expanded', 'aria-controls' to the button, set 'aria-hidden="true"' on the child SVG, and replaced 'focus:outline-none' with 'focus:outline-none focus-visible:ring-2 focus-visible:ring-sage rounded' to ensure visible keyboard focus.
