module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'google',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 'off',
    indent: ['warn', 2]
  }
};