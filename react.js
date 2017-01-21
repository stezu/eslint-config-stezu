module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/strict.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/eslint3.js',
    './rules/react.js'
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: ['react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  }
};
