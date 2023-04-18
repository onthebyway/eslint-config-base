module.exports = {
  // eslint-configs
  extends: ['airbnb', 'eslint:recommended', 'plugin:import/errors', 'plugin:prettier/recommended'],
  // eslint-plugins
  plugins: ['prettier', 'prefer-arrow-functions'],
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
    'import/no-default-export': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        returnStyle: 'explicit',
      },
    ],
    // otherwise airbnb config throws import errors
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    //
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
