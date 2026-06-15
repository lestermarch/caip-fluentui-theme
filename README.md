# @lestermarch/caip-fluentui-theme

CAIP (Cloud & AI Platform) theme for [Fluent UI React v9](https://react.fluentui.dev).

Cloud Blue and Cloud Teal as primary brand colours, AI Pink / Red / Yellow as accents, with adapted brighter ramps for dark mode. Includes the full Fluent `Theme` objects, semantic token map, and gradient CSS variables for hero / accent use outside Fluent components.

> **Note.** CAIP source guidance names the palette and usage principles but does not provide exact hex values. The values shipped here are working implementation tokens aligned to familiar Microsoft / Azure / Fluent conventions. Treat them as practical defaults, not official Microsoft brand values.

## Install

```bash
npm install @lestermarch/caip-fluentui-theme @fluentui/react-components
```

`@fluentui/react-components` and `react` are peer dependencies.

## Use

```tsx
import { FluentProvider } from "@fluentui/react-components";
import { caipLightTheme, caipDarkTheme } from "@lestermarch/caip-fluentui-theme";

export function App({ dark }: { dark: boolean }) {
  return (
    <FluentProvider theme={dark ? caipDarkTheme : caipLightTheme}>
      {/* your app */}
    </FluentProvider>
  );
}
```

## Example

A runnable Vite + React showcase lives in [`examples/fluent-showcase`](./examples/fluent-showcase). It demonstrates the theme with light / dark toggle and the standard component set (hero, buttons, badges, cards, table, chart, palette).

| Light | Dark |
|---|---|
| ![Showcase, light theme](./examples/fluent-showcase/showcase-light.png) | ![Showcase, dark theme](./examples/fluent-showcase/showcase-dark.png) |

```bash
cd examples/fluent-showcase
npm install
npm run dev
```

## Exports

| Export | What it is |
|---|---|
| `caipLightTheme` | Fluent `Theme` for light mode |
| `caipDarkTheme` | Fluent `Theme` for dark mode |
| `caipSemanticTokens` | `{ light, dark }` with named colour tokens (`primary`, `secondary`, `tertiary`, semantic states, surfaces, text) |
| `caipGradients` | `{ light, dark }` with `cloud`, `ai`, `stroke` CSS gradient strings |
| `caipCssVariables` | A CSS string defining `--caip-gradient-*` custom properties for both themes |

## Gradients

Fluent does not have a native gradient token system, so gradients are exposed as CSS strings and a ready-to-paste CSS variable block:

```tsx
import { caipCssVariables } from "@lestermarch/caip-fluentui-theme";

// Once at app entry:
const style = document.createElement("style");
style.textContent = caipCssVariables;
document.head.appendChild(style);
```

Then use them in your styles:

```css
.hero-shape { background: var(--caip-gradient-cloud); }
.divider     { background: var(--caip-gradient-stroke); height: 2px; }
```

CAIP gradient rules:

- Use gradients on hero shapes, accent rules, or illustrations — not as full-page backgrounds.
- Use one gradient treatment per view.
- Keep body text off gradients.

## Versioning

Semver. Breaking changes to token names or values bump the major.

## License

[MIT](./LICENSE)
