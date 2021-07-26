module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    // "allowImportExportEverywhere": false,
    // "codeFrame": true
  },
  rules: {
    'no-new-wrappers': 'error',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'react/prefer-stateless-function': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'default-param-last': 'off',
    'sonarjs/no-small-switch': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-shadow': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-danger': 'off',
    'linebreak-style': 'off',
  },
};
