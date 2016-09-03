module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/strict.js',
    './rules/variables.js'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'module'
  }
};
