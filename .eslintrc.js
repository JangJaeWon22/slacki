// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    // Airbnb style guide 적용
    "airbnb-base",
    // TypeScript ESLint recommanded style 적용
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  rules: {
    // ESLint 기본적으로 console 허용 안 함.
    "no-console": 0,
  },
};
