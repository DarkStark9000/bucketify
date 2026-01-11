import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  // Base recommended rules
  js.configs.recommended,

  // React plugin configuration
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React rules
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // React 19 - JSX runtime doesn't require React import
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // Relax strict rules for this project
      "react/prop-types": "off",
      "react/no-array-index-key": "off",

      // General rules
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-console": "off",
    },
  },

  // Prettier compatibility - disables formatting rules
  prettier,

  // Ignore patterns
  {
    ignores: ["dist/**", "node_modules/**", "*.config.js"],
  },
];
