module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    uni: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/no-reserved-props': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-unused-components': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-mutating-props': 'off',
    'default-param-last': 'off',
    'func-names': 'off',
    'no-undef': 'warn',
    'prefer-promise-reject-errors': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'never'],
    'linebreak-style': [0, 'error', 'windows'],

    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     ignorePackages: true,
    //     pattern: {
    //       js: 'ignorePackages',
    //     },
    //   },
    // ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',
    'no-useless-escape': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-vars': 'warn',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
    'max-len': 'off',
    'default-case': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'array-callback-return': 'off',
    'brace-style': 'off',
    'no-tabs': 'off',
    'guard-for-in': 'off',
    eqeqeq: 'off',
    camelcase: 'off',
    'import/no-dynamic-require': 'off',
  },
}
