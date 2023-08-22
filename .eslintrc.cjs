/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  extends: [
    '@boehringer-ingelheim/eslint-config/base',
    '@boehringer-ingelheim/eslint-config/react',
    // NOTE: Prettier has to be the last one to work
    'prettier',
  ],
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
    'react/jsx-sort-props': 'warn',
    'sort-keys-plus/sort-keys': 'warn',
    'import/order': 'warn',
  },
};
