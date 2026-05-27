
## 2026-05-27 - Icon-only buttons need accessible names and state
**Learning:** Icon-only interactive elements (like mobile menu hamburgers) must have an `aria-label` describing their action, `aria-hidden="true"` set on the internal SVG icon, and maintain accurate `aria-controls` and `aria-expanded` attributes via JavaScript if they toggle the visibility of other elements.
**Action:** Add `aria-label`, `aria-controls`, `aria-expanded="false"`, `aria-hidden` on SVG, and toggle `aria-expanded` in the click handler for all icon-only toggle buttons.
