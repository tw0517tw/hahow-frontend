module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["sort-imports-es6-autofix", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["single", "multiple", "all", "none"],
      },
    ],
  },
};
