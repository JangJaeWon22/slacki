// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb style guide 적용
    'airbnb-base',
    'plugin:node/recommended',
    'prettier',
    // TypeScript ESLint recommanded style 적용
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    // ESLint 기본적으로 console 허용 안 함.
    'no-console': 0,
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      'error',
      { caseSensitive: false },
    ],
  },
};
