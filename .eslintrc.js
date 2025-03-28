module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import", "jest", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier", // Must be last to override other configs
  ],
  rules: {
    // Custom rules for your project
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
};
