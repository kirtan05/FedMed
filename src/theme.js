import { createTheme, lightThemePrimitives, darkThemePrimitives } from 'baseui';

export const lightTheme = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: 'Roboto, sans-serif',
  },
  {
    // Custom overrides
  }
);

export const darkTheme = createTheme(
  {
    ...darkThemePrimitives,
    primaryFontFamily: 'Roboto, sans-serif',
  },
  {
    // Custom overrides
  }
);