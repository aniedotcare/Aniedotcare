## 2024-05-18 - Mobile Menu Icon Accessibility
**Learning:** Icon-only interactive elements without ARIA labels are opaque to screen readers. Specifically, the mobile menu button in `index.html` lacked context and keyboard focus styling (`focus:outline-none` was hiding it).
**Action:** Always add `aria-label`, `aria-controls`, and dynamic `aria-expanded` attributes to toggles. Ensure `focus-visible:ring-2` (or similar) replaces `focus:outline-none` to preserve keyboard accessibility without compromising mouse/touch styling. Ensure internal SVGs have `aria-hidden="true"`.
