module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'error',

    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'error',

    // treat var statements as if they were block scoped
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // specify the maximum cyclomatic complexity allowed in a program
    // http://eslint.org/docs/rules/complexity
    'complexity': ['error', 5],

    // require return statements to either always or never specify values
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // specify curly brace conventions for all control statements
    // http://eslint.org/docs/rules/curly
    'curly': 'error',

    // require default case in switch statements
    // http://eslint.org/docs/rules/default-case
    'default-case': 'error',

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // encourages use of dot notation whenever possible
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': 'error',

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': 'error',

    // make sure for-in loops have an if statement
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // disallow the use of alert, confirm, and prompt
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // disallow use of arguments.caller or arguments.callee
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow else after a return in an if
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // disallow empty functions without comments
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'error',

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'error',

    // disallow use of eval()
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // disallow adding to native types
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // disallow unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // disallow most implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['error', {
      'allow': ['!!']
    }],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',

    // disallow use of eval()-like methods
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'warn',

    // disallow usage of __iterator__ property
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // disallow use of labels for anything other then loops and switches
    // http://eslint.org/docs/rules/no-labels
    'no-labels': 'error',

    // disallow unnecessary nested blocks
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // disallow use of multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // disallow use of multiline strings
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // disallow use of new operator for Function object
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // disallows creating new instances of String, Number, and Boolean
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    // http://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // disallow use of (old style) octal literals
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', {
      'props': true
    }],

    // disallow usage of __proto__ property
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // disallow declaring the same variable more then once
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // disallow use of assignment in return statement
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // disallow use of `javascript:` urls.
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // disallow use of comma operator
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'warn',

    // disallow usage of expressions in statement position
    // http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'error',

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'warn',

    // disallow use of the with statement
    // http://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // require use of the second argument for parseInt()
    // http://eslint.org/docs/rules/radix
    'radix': 'error',

    // requires to declare all vars on top of their containing scope
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': 'error',

    // require or disallow Yoda conditions
    // http://eslint.org/docs/rules/yoda
    'yoda': 'error'
  }
};
