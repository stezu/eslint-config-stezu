module.exports = {
  env: {
    node: true
  },
  rules: {
    // require return statements after callbacks
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'error',

    // require require() calls to be placed at top-level module scope
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // require error handling in callbacks
    // http://eslint.org/docs/rules/handle-callback
    'handle-callback-err': ['error', '^.*(e|E)rr'],

    // disallow require calls to be mixed with regular var declarations
    // http://eslint.org/docs/rules/no-mixed
    'no-mixed-requires': ['error', {
      'grouping': true,
      'allowCall': true
    }],

    // disallow new operators with calls to require
    // http://eslint.org/docs/rules/no-new
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path
    'no-path-concat': 'error',

    // disallow the use of process.env
    // http://eslint.org/docs/rules/no-process
    'no-process-env': 'error',

    // disallow the use of process.exit()
    // http://eslint.org/docs/rules/no-process
    'no-process-exit': 'error',

    // disallow specified modules when loaded by require
    // http://eslint.org/docs/rules/no-restricted
    'no-restricted-modules': 'off',

    // disallow synchronous methods
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 'error'
  }
};
