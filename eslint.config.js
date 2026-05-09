// eslint.config.js

import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist', 'build', 'node_modules'],
  },

  js.configs.recommended,

  prettierConfig,

  {
    files: ['**/*.{js,mjs,cjs}'],

    plugins: {
      prettier: prettierPlugin,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      /*
       * Prettier
       */
      'prettier/prettier': [
        'warn',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          tabWidth: 2,
        },
      ],

      /*
       * Best Practices
       */
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],

      /*
       * Variables
       */
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      /*
       * Code Quality
       */
      'no-console': 'warn',
      'no-debugger': 'error',

      /*
       * Style
       */
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
