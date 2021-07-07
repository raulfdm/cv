module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  plugins: ['cypress'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
};
