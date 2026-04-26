## 2024-04-26 - Keyboard Focus & ARIA for Mobile Menus
**Learning:** In vanilla JS setups like this project, removing focus rings with `focus:outline-none` breaks keyboard navigation unless explicitly restored using `focus-visible:` classes. The mobile menu lacked proper semantic state communication to screen readers.
**Action:** Applied `focus-visible:ring-2 focus-visible:ring-sage` to custom icon buttons. Added `aria-label`, `aria-controls`, and dynamically updated `aria-expanded` via JavaScript to broadcast state changes properly.
