module.exports = {
  // eslint-configs
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:prettier/recommended',
  ],
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
    'no-undef': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-console': 'off',
    'import/no-default-export': 'warn',
    'prettier/prettier': [
      'error',
      // configure Prettier for ESLint
      {
        arrowParens: 'avoid',
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
