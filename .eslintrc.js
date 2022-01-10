module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base', 
    'airbnb-typescript/base', 
    'plugin:@typescript-eslint/recommended', 
    'plugin:eslint-comments/recommended', 
    'plugin:jest/recommended', 
    'plugin:promise/recommended', 
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  // ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-console": "off",
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    // "no-unused-vars": "off",
    // 'import/no-default-export': 'error',
    'import/extensions':'off'
  },
  "settings": {
    "import/resolver": {
      "typescript": {
          "alwaysTryTypes": true,
          "project": "./tsconfig.json"
      }
    }
  }
};
