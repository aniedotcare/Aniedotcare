## 2026-06-09 - Added ARIA labels and focus states to mobile menu
**Learning:** The mobile menu toggle button lacked proper keyboard accessibility and screen-reader support.
**Action:** Replaced `focus:outline-none` with `focus-visible` utility classes for clear visual keyboard indicators without disturbing pointer users. Added appropriate ARIA attributes (`aria-label`, `aria-controls`, `aria-expanded`) and toggled `aria-expanded` via JS.
