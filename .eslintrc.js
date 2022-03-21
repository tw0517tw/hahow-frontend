module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
