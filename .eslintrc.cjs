module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // import of react no longer required
    'tailwindcss/classnames-order': 'off', // conflicts with official prettier-plugin-tailwindcss and tailwind v3
    // set more strict to highlight in editor
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'no-unused-expressions': 'error',
  },
  settings: {
    tailwindcss: {
      config: 'tailwind.config.cjs',
      whitelist: ['font-default', 'container-max', 'container-min'],
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: [
        'postcss.config.js',
        'rollup.config.js',
        'scripts/canary-release.js',
      ],
      env: {
        node: true,
      },
    },
  ],
};
