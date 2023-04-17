module.exports = {
  // eslint-configs
  extends: ['airbnb', 'eslint:recommended', 'plugin:import/errors', 'plugin:prettier/recommended'],
  // eslint-plugins
  plugins: ['prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  // enabling/disabling/changing level of rules
  rules: {
    'func-style': [2, 'expression', { allowArrowFunctions: true }],
    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-undef': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-console': 'off',
    'import/no-default-export': 'off',
    'prettier/prettier': [
      'error',
      // configure Prettier for ESLint
      {
        arrowParens: 'always',
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        singleAttributePerLine: true,
        semi: true,
      },
    ],
  },
};
