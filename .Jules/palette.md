## 2026-05-01 - Mobile Menu Button Accessibility
**Learning:** The mobile menu toggle button lacked a visible focus indicator (due to `focus:outline-none`) and had no ARIA attributes, making it completely invisible to screen readers and difficult to use via keyboard navigation.
**Action:** Always replace `focus:outline-none` with `focus-visible` utility classes (e.g., `focus-visible:ring-2`) for interactive elements. Ensure icon-only buttons have an `aria-label`, manage `aria-expanded` state dynamically in JS, and hide decorative SVG icons using `aria-hidden="true"`.
