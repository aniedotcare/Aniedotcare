## 2024-04-18 - Missing ARIA attributes on Mobile Menu Button
**Learning:** The mobile menu button in index.html lacks essential ARIA attributes (aria-label, aria-expanded, aria-controls) and removes visual focus with focus:outline-none, hindering screen reader users and keyboard navigation.
**Action:** Added aria-label, aria-controls, and dynamic aria-expanded state. Replaced focus:outline-none with focus-visible:ring-2 focus-visible:ring-sage for keyboard accessibility.
