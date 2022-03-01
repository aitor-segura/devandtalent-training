module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended', 'eslint:recommended', 'airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'implicit-arrow-linebreak': ['error', 'below'],
  },
};
