## 2026-05-31 - Custom Icon-Only Toggle Buttons
**Learning:** Icon-only toggle buttons (like mobile hamburger menus) often suffer from accessibility regressions when standard outline removal (focus:outline-none) is applied without an alternative, and their interactive state is not properly communicated to screen readers.
**Action:** When creating or modifying icon-only toggle buttons, always ensure:
1. An explicit 'aria-label' is present.
2. The internal SVG icon has 'aria-hidden="true"'.
3. 'focus:outline-none' is paired with explicit 'focus-visible:ring' classes to preserve keyboard navigation styling.
4. 'aria-expanded' and 'aria-controls' are present and correctly synchronized via JavaScript during toggle and dismissal actions.
