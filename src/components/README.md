# Component Architecture

Components are organized into four categories:

## `/ui`,  Primitive UI Components

Stateless, reusable primitives. No business logic, no translations.

| Component | Props | Notes |
|---|---|---|
| `Button` | `variant`, `size`, `loading`, `fullWidth` | 5 variants: primary, secondary, outline, ghost, danger |
| `Card` | `variant`, `padding`, `hover` | 4 variants: default, elevated, bordered, dark |
| `Badge` | `variant`, `size` | 5 variants: default, accent, success, error, outline |
| `Input` | `label`, `error`, `hint` | Accessible with `aria-invalid` and `aria-describedby` |
| `Select` | `label`, `error`, `options` | Styled native select with chevron icon |
| `Checkbox` | `label`, `description`, `error` | Accessible checkbox with description text |
| `ProgressBar` | `value`, `label`, `showValue` | Used for multi-step form progress |
| `Modal` | `isOpen`, `onClose`, `title`, `size` | Focus trap, Escape key, body scroll lock |

## `/layout`,  Layout Components

Shell components that wrap page content.

| Component | Notes |
|---|---|
| `Navbar` | Sticky, backdrop-blur, mobile hamburger, LanguageSwitcher integrated |
| `Footer` | Dark background, 4-column layout, links from `siteConfig` |
| `CookieBanner` | Fixed bottom banner, consent-aware, links to /cookies |
| `ConsentManager` | Client component, manages gtag consent mode v2, exposes ConsentContext |
| `LanguageSwitcher` | Switches locale while preserving path |

## `/sections`,  Page Sections

Composable page sections. Each handles its own translations via `useTranslations`.

| Component | Used On |
|---|---|
| `Hero` | Home |
| `WhoWeHelp` | Home |
| `DifferentiatorCards` | Home |
| `ProblemSolutions` | Home |
| `ProcessSteps` | Home |
| `SolutionGrid` | Home, Solutions |
| `InsightGrid` | Home, Insights |
| `TeamGrid` | About |
| `CTABlock` | All pages (configurable via props) |

## `/forms`,  Form Components

Multi-step contact form.

| Component | Notes |
|---|---|
| `MultiStepForm` | 4-step form, validation, POST to /api/submit-lead, success state |
| `FormStep` | Animated step wrapper, renders only when `isActive` |
| `FieldWrapper` | Label + error + hint wrapper for non-Input fields |

## Import Pattern

All imports use the `@/` alias which maps to the project root:

```tsx
import Button from '@/src/components/ui/Button'
import { useConsent } from '@/src/components/layout/ConsentManager'
```
