module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/strict.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/eslint3.js'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  env: {
    es6: true
  },
  rules: {

    // in ES6, we can use big arrows for anonymous functions,
    // there's no reason to not name function expressions
    'func-names': 'error'
  }
};
