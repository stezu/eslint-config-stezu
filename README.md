# eslint-config-stezu

[![npm version][1]][2]

[1]: https://img.shields.io/npm/v/eslint-config-stezu.svg
[2]: https://www.npmjs.com/package/eslint-config-stezu

A collection of eslint configurations for my projects.

## Installation

### React

```
npm install --save-dev eslint eslint-config-stezu babel-eslint eslint-plugin-react
```

### ES6/ES5

```
npm install --save-dev eslint eslint-config-stezu
```

## Usage

Refer to the [ESLint documentation](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) if you need to customize rules, but the basics are documented below.

### ES6

The default configuration is for ES6 and up. The main goal is to prevent common issues and enforce readable code. Complexity should be low, JSDoc comments should exist, etc. The goal is to generally make things easy to understand by a junior developer. Due to the complexity rules, it tends to favor a more functional style, but I personally believe that helps with readability which is the overall goal of this ruleset.

`.eslintrc.yml`
```yml
extends: stezu
```

### React

A superset of the ES6 guide, but with react-specific additions to help prevent making some common mistakes.

`.eslintrc.yml`
```yml
extends: stezu/react
```

### ES5

Generally the same rules as the ES6 style guide, but doesn't enforce ES6-specific things like arrow functions. Useful if you're still writing ES5 code by hand, but you should really stop doing that. It's bad for your health.

`.eslintrc.yml`
```yml
extends: stezu/es5
```
