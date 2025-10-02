import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactRefreshPlugin from "eslint-plugin-react-refresh"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default [
  {
    ignores: [
      "build/**",
      "dist/**",
      "node_modules/**",
      ".react-router/**",
      "coverage/**",
      "*.config.js",
      "*.config.ts",
      ".storybook/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "off",

      // React Refresh
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // TypeScript rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-non-null-assertion": "off",

      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "error",
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-template": "error",
      "prefer-destructuring": [
        "error",
        {
          array: false,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // Prettier
      "prettier/prettier": "error",

      // Disable conflicting rules
      ...prettierConfig.rules,
    },
  },
  // Relaxed rules for all component files (not just ui components)
  {
    files: ["app/core/components/**/*.{ts,tsx}", "app/features/**/components/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  // Relaxed rules for all story files
  {
    files: ["**/*.stories.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/rules-of-hooks": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  // Relaxed rules for route files
  {
    files: ["app/routes/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  // Relaxed rules for utility/lib files
  {
    files: ["app/core/lib/**/*.{ts,tsx}", "app/core/utils/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
]
