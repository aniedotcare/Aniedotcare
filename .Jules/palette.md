
## 2024-05-18 - Avoid stripping visual focus outlines
**Learning:** We removed `focus:outline-none` from an interactive icon-only element because it strips away necessary visual focus indication for keyboard navigators.
**Action:** Always use `focus-visible` classes (like `focus-visible:ring-2`) and add necessary `aria-label`s for icon-only buttons.
