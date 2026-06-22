## 2024-06-22 - [Mobile Menu Accessibility]
**Learning:** The mobile menu pattern in this application lacked the necessary ARIA attributes to be screen-reader friendly and a focus state for keyboard navigation.
**Action:** Applied `aria-label`, `aria-controls`, `aria-expanded` and a visible focus ring (`focus-visible:ring-2 focus-visible:ring-sage`) to the mobile menu button. Also ensured `aria-expanded` is dynamically updated by the JavaScript handlers and added `aria-hidden="true"` to the inner SVG icon.
