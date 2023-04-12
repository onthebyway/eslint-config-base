module.exports = {
  // eslint-configs
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:prettier/recommended",
  ],
  // eslint-plugins
  plugins: ["simple-import-sort", "prettier"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  // enabling/disabling/changing level of rules
  rules: {
    "no-undef": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "import/no-default-export": "warn",
    "prettier/prettier": [
      "error",
      // configure Prettier for ESLint
      {
        arrowParens: "avoid",
        printWidth: 120,
        singleQuote: true,
        trailingComma: "all",
        singleQuote: true,
        arrowParens: "always",
        tabWidth: 4,
        singleAttributePerLine: true,
        semi: true,
      },
    ],
    radix: "off",
  },
};
