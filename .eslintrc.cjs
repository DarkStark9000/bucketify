module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'react-refresh', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        semi: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        endOfLine: 'lf',
        useTabs: false
      }
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
};
