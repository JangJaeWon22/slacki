// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb style guide 적용
    "airbnb-base",
    "airbnb-typescript/base",
    'plugin:node/recommended',
    'prettier',
    // TypeScript ESLint recommanded style 적용
    // 'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    // ESLint 기본적으로 console 허용 안 함.
    "no-console": "error",
    "import/prefer-default-export": "off",
    "unicorn/no-array-reduce": "off",
    "@typescript-eslint/no-var-requires": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
    'import/no-unresolved': [
      'error',
      { "caseSensitive": false }
    ],  
  },
  settings: {
    "import/resolver": {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
