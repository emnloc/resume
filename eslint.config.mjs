import { fixupConfigRules } from '@eslint/compat';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/dist', '*.config.js', '*.config.mjs' , '**/tailwind.config.js'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'prettier'
    )
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: '.',
      },
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      "@typescript-eslint/unbound-method": "none"
    },
    settings: {
      react: {
        createClass: 'createReactClass', // Regex for Component Factory to use,
        // default to "createReactClass"
        pragma: 'React', // Pragma to use, default to "React"
        fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
        version: 'detect', // React version. "detect" automatically picks the version you have installed.
        // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
        // It will default to "latest" and warn if missing, and to "detect" in the future
        flowVersion: '0.53', // Flow version
      },
      propWrapperFunctions: [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        'forbidExtraProps',
        { property: 'freeze', object: 'Object' },
        { property: 'myFavoriteWrapper' },
        // for rules that check exact prop wrappers
        { property: 'forbidExtraProps', exact: true },
      ],
      componentWrapperFunctions: [
        // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
        'observer', // `property`
        { property: 'styled' }, // `object` is optional
        { property: 'observer', object: 'Mobx' },
        { property: 'observer', object: '<pragma>' }, // sets `object` to whatever value `settings.react.pragma` is set to
      ],
      formComponents: [
        // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
        'CustomForm',
        { name: 'SimpleForm', formAttribute: 'endpoint' },
        { name: 'Form', formAttribute: ['registerEndpoint', 'loginEndpoint'] }, // allows specifying multiple properties if necessary
      ],
      linkComponents: [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        'Hyperlink',
        { name: 'MyLink', linkAttribute: 'to' },
        { name: 'Link', linkAttribute: ['to', 'href'] }, // allows specifying multiple properties if necessary
      ],
    },
  },
];
