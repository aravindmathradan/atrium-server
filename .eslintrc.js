module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended'
  ],
  overrides: [
    {
      files: ['**/*.spec.*'],
      env: {
        mocha: true,
      },
      rules: {},
    }
  ],
  globals: {},
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'quote-props': [
      'warn',
      'as-needed'
    ],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    }],
    'comma-dangle': [
      'warn',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'padded-blocks': [
      'error',
      'never'
    ],
    'one-var': [
      'error',
      {
        initialized: 'never',
        uninitialized: 'consecutive',
      }
    ],
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'no-var': 'warn',
    'prefer-template': 'error',
    'no-useless-escape': 'warn',
    'wrap-iife': 'error',
    'space-before-blocks': 'error',
    'prefer-arrow-callback': 'warn',
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'implicit-arrow-linebreak': 'error',
    'no-duplicate-imports': 'error',
    'object-curly-newline': 'error',
    'no-unused-vars': 'warn',
    'comma-style': 'error',
    'array-bracket-spacing': 'error',
    'no-multiple-empty-lines': 'error',
    'key-spacing': 'error',
    'func-call-spacing': 'error',
    'computed-property-spacing': 'error',
    'comma-spacing': 'error',
    'space-in-parens': 'error',
    'newline-per-chained-call': 'warn',
    'no-whitespace-before-property': 'error',
    'eol-last': 'error',
    'space-infix-ops': 'error',
    'keyword-spacing': 'error',
    'spaced-comment': 'error',
    'no-else-return': 'warn',
    'brace-style': 'error',
    'nonblock-statement-body-position': 'error',
    'no-case-declarations': 'error',
    eqeqeq: 'warn',
  },
};
