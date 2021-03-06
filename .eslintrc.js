/**
 * @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config}
 */
eslintConfig = {
  extends: ['next/core-web-vitals', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    semi: ['error', 'always'],
    '@next/next/no-html-link-for-pages': ['off'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};

module.exports = eslintConfig;
