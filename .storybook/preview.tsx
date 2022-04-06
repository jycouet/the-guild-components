import { FC } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { ThemeProvider } from '../packages/components/src/helpers/theme';
import '../packages/components/src/static/styles.css';
import '../packages/components/src/static/fonts.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Components', ['Headers'], 'Projects'],
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.normal, appBg: 'white' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
  },
};

const ThemeWrapper: FC = ({ children }) => {
  return (
    <ThemeProvider
      // TODO: make work toggle in header
      isDarkTheme={useDarkMode()}
    >
      {children}
    </ThemeProvider>
  );
};

export const decorators = [
  (Story) => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
];
