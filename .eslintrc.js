export default {
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
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jest'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'implicit-arrow-linebreak': ['error', 'below'],
    'import/no-unresolved': ['error'],
  },
};
