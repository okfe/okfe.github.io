// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: { legacyDecorators: true }
  },
  env: {
    browser: true,
  },
  extends: [
    'react-app'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'space-before-function-paren': 0,
    'jsx-a11y/anchor-is-valid': 'off'
  }
}
