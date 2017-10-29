module.exports = {
  rules: {

    // if a class method doesn't use `this`, it should be made static
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'warn',

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'error',

    // disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // require or disallow spacing between function identifiers and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'error'

    // enforce newlines between operands of ternary expressions
    // http://eslint.org/docs/rules/multiline-ternary
    // 'multiline-ternary': 'off',

    // disallow tabs in file
    // http://eslint.org/docs/rules/no-tabs
    // 'no-tabs': 'off'
  }
};
