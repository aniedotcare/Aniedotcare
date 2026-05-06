## 2026-05-06 - Mobile Menu Accessibility Pattern
**Learning:** Icon-only mobile menus in the custom Tailwind UI were missing accessible names, state management (`aria-expanded`), and keyboard focus indicators due to standalone `focus:outline-none`.
**Action:** Replaced `focus:outline-none` with `focus-visible:ring-2` for keyboard users, and implemented ARIA state toggling in JavaScript to ensure screen readers receive accurate menu state feedback.
