// CAIP Fluent UI theme adaptation
// Version: 0.1
// Target: Fluent UI React v9 (@fluentui/react-components)
//
// Notes:
// - CAIP source guidance names the palette and usage principles but does not provide exact hex values.
// - These are working implementation tokens adapted from CAIP colour names into a practical web theme.
// - Use Cloud Blue as primary, Cloud Teal as secondary, and AI colours sparingly for accents.
// - Gradients are not native Fluent tokens; expose them separately as custom CSS variables.

import {
  createLightTheme,
  createDarkTheme,
  type BrandVariants,
  type Theme,
} from "@fluentui/react-components";

const caipBrandRamp: BrandVariants = {
  10: "#001E32",
  20: "#003A5C",
  30: "#004E7C",
  40: "#005A9E",
  50: "#006CBE",
  60: "#0078D4",
  70: "#1689E5",
  80: "#2B9BF4",
  90: "#4CC2FF",
  100: "#76D1FF",
  110: "#9ADEFF",
  120: "#BDEBFF",
  130: "#D7F4FF",
  140: "#EBFAFF",
  150: "#F5FCFF",
  160: "#FFFFFF",
};

export const caipLightTheme: Theme = {
  ...createLightTheme(caipBrandRamp),

  // Brand / primary actions
  colorBrandBackground: "#0078D4",
  colorBrandBackgroundHover: "#106EBE",
  colorBrandBackgroundPressed: "#005A9E",
  colorBrandForeground1: "#0078D4",
  colorBrandForeground2: "#005A9E",
  colorBrandStroke1: "#0078D4",
  colorCompoundBrandBackground: "#0078D4",
  colorCompoundBrandBackgroundHover: "#106EBE",
  colorCompoundBrandBackgroundPressed: "#005A9E",
  colorCompoundBrandForeground1: "#0078D4",
  colorCompoundBrandStroke: "#0078D4",

  // Neutral surfaces
  colorNeutralBackground1: "#FFFFFF",
  colorNeutralBackground2: "#FAFAFA",
  colorNeutralBackground3: "#F5F5F5",
  colorNeutralBackground4: "#F3F2F1",
  colorNeutralBackground5: "#EDEBE9",
  colorNeutralBackground6: "#E1DFDD",
  colorNeutralForeground1: "#323130",
  colorNeutralForeground2: "#605E5C",
  colorNeutralForeground3: "#8A8886",
  colorNeutralForegroundDisabled: "#A19F9D",
  colorNeutralStroke1: "#E1DFDD",
  colorNeutralStroke2: "#EDEBE9",
  colorNeutralStrokeAccessible: "#605E5C",

  // Status tokens
  colorPaletteGreenBackground1: "#DFF6DD",
  colorPaletteGreenBackground2: "#107C10",
  colorPaletteGreenForeground1: "#0B6A0B",
  colorPaletteGreenBorderActive: "#107C10",

  colorPaletteYellowBackground1: "#FFF4CE",
  colorPaletteYellowBackground2: "#FFB900",
  colorPaletteYellowForeground1: "#8A6D00",
  colorPaletteYellowBorderActive: "#FFB900",

  colorPaletteRedBackground1: "#FDE7E9",
  colorPaletteRedBackground2: "#D13438",
  colorPaletteRedForeground1: "#A4262C",
  colorPaletteRedBorderActive: "#D13438",

  // Typography
  fontFamilyBase:
    "Segoe UI, SegoeUI, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
  fontFamilyMonospace:
    "Cascadia Mono, Consolas, 'Courier New', monospace",
};

export const caipDarkTheme: Theme = {
  ...createDarkTheme(caipBrandRamp),

  // Brand / primary actions
  colorBrandBackground: "#4CC2FF",
  colorBrandBackgroundHover: "#76D1FF",
  colorBrandBackgroundPressed: "#2AA0D6",
  colorBrandForeground1: "#4CC2FF",
  colorBrandForeground2: "#76D1FF",
  colorBrandStroke1: "#4CC2FF",
  colorCompoundBrandBackground: "#4CC2FF",
  colorCompoundBrandBackgroundHover: "#76D1FF",
  colorCompoundBrandBackgroundPressed: "#2AA0D6",
  colorCompoundBrandForeground1: "#4CC2FF",
  colorCompoundBrandStroke: "#4CC2FF",

  // Neutral surfaces
  colorNeutralBackground1: "#0B0B0C",
  colorNeutralBackground2: "#111112",
  colorNeutralBackground3: "#161617",
  colorNeutralBackground4: "#1E1E20",
  colorNeutralBackground5: "#202024",
  colorNeutralBackground6: "#2B2B2C",
  colorNeutralForeground1: "#FFFFFF",
  colorNeutralForeground2: "#C8C6C4",
  colorNeutralForeground3: "#A19F9D",
  colorNeutralForegroundDisabled: "#797775",
  colorNeutralStroke1: "#2B2B2C",
  colorNeutralStroke2: "#3A3A3C",
  colorNeutralStrokeAccessible: "#C8C6C4",

  // Status tokens
  colorPaletteGreenBackground1: "#092509",
  colorPaletteGreenBackground2: "#4AEA4A",
  colorPaletteGreenForeground1: "#B7F7B7",
  colorPaletteGreenBorderActive: "#4AEA4A",

  colorPaletteYellowBackground1: "#2A2200",
  colorPaletteYellowBackground2: "#FFD966",
  colorPaletteYellowForeground1: "#FFEAA6",
  colorPaletteYellowBorderActive: "#FFD966",

  colorPaletteRedBackground1: "#2A0A0B",
  colorPaletteRedBackground2: "#FF6A6E",
  colorPaletteRedForeground1: "#FFB3B5",
  colorPaletteRedBorderActive: "#FF6A6E",

  // Typography
  fontFamilyBase:
    "Segoe UI, SegoeUI, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
  fontFamilyMonospace:
    "Cascadia Mono, Consolas, 'Courier New', monospace",
};

export const caipSemanticTokens = {
  light: {
    primary: "#0078D4",
    secondary: "#00B7C3",
    tertiary: "#E3008C",
    success: "#107C10",
    warning: "#FFB900",
    error: "#D13438",
    info: "#0078D4",
    surface: "#FFFFFF",
    surfaceAlt: "#F5F5F5",
    textPrimary: "#323130",
    textSecondary: "#605E5C",
  },
  dark: {
    primary: "#4CC2FF",
    secondary: "#4CE0D2",
    tertiary: "#FF4DB8",
    success: "#4AEA4A",
    warning: "#FFD966",
    error: "#FF6A6E",
    info: "#4CC2FF",
    surface: "#161617",
    surfaceAlt: "#1E1E20",
    textPrimary: "#FFFFFF",
    textSecondary: "#C8C6C4",
  },
};

export const caipGradients = {
  light: {
    cloud: "linear-gradient(135deg, #0078D4 0%, #00B7C3 100%)",
    ai: "linear-gradient(135deg, #E3008C 0%, #D13438 50%, #FFB900 100%)",
    stroke: "linear-gradient(90deg, #0078D4 0%, #00B7C3 45%, #E3008C 100%)",
  },
  dark: {
    cloud: "linear-gradient(135deg, #4CC2FF 0%, #4CE0D2 100%)",
    ai: "linear-gradient(135deg, #FF4DB8 0%, #FF6A6E 50%, #FFD966 100%)",
    stroke: "linear-gradient(90deg, #4CC2FF 0%, #4CE0D2 45%, #FF4DB8 100%)",
  },
};

// Example custom CSS variables for non-Fluent gradient use:
export const caipCssVariables = `
:root {
  --caip-gradient-cloud: linear-gradient(135deg, #0078D4 0%, #00B7C3 100%);
  --caip-gradient-ai: linear-gradient(135deg, #E3008C 0%, #D13438 50%, #FFB900 100%);
  --caip-gradient-stroke: linear-gradient(90deg, #0078D4 0%, #00B7C3 45%, #E3008C 100%);
}

[data-theme="dark"] {
  --caip-gradient-cloud: linear-gradient(135deg, #4CC2FF 0%, #4CE0D2 100%);
  --caip-gradient-ai: linear-gradient(135deg, #FF4DB8 0%, #FF6A6E 50%, #FFD966 100%);
  --caip-gradient-stroke: linear-gradient(90deg, #4CC2FF 0%, #4CE0D2 45%, #FF4DB8 100%);
}
`;
