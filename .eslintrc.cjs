/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  extends: [
    '@boehringer-ingelheim/eslint-config/base/strict',
    '@boehringer-ingelheim/eslint-config/react',
    // NOTE: Prettier has to be the last one to work
    'prettier',
  ],
  plugins: ['react-refresh'],
  rules: {
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-collapsible-if': 'warn',
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-nested-switch': 'warn',
    'sonarjs/no-nested-template-literals': 'warn',
    'sonarjs/prefer-single-boolean-return': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    // No error for wrong sorting
    'perfectionist/sort-named-imports': 'warn',
    'perfectionist/sort-object-types': 'warn',
    'perfectionist/sort-objects': 'warn',
    'perfectionist/sort-jsx-props': 'warn',
    // https://github.com/vitejs/vite-plugin-react-swc#consistent-components-exports
    'react-refresh/only-export-components': 'warn',
  },
};
