module.exports = {
  root: true,
  // extends: ['plugin:vue/essential', '@vue/prettier'],
  extends: ['plugin:vue/essential', 'style-guide'],
  plugins: ['vue'],
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    // 'prettier/prettier': [
    //   'off',
    //   {
    //     trailingComma: 'all',
    //     arrowParens: 'always',
    //   },
    // ],
    'import/no-unresolved': 'off',
    'max-len': 'off',
    'no-unused-vars': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不禁用 console
    'no-console': 'off',
    'global-require': 'off',
    // https://eslint.cn/docs/rules/guard-for-in
    'guard-for-in': 'off',
    'prefer-destructuring': 'off',
    // TODO https://github.com/prettier/prettier-eslint/issues/69
    'comma-dangle': ['error', 'always-multiline'],
    // 不允许多个空行 http://eslint.cn/docs/rules/no-multiple-empty-lines
    // 'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 2, 'maxEOF': 2}],
    'arrow-parens': ['error', 'always'],
    'no-mixed-operators': 'off',
    // TODO
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'prefer-promise-reject-errors': 'off',
  },
};
