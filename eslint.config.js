import eslint from "@eslint/js"
import globals from "globals"
import plugin_react from "eslint-plugin-react"
import plugin_react_hooks from "eslint-plugin-react-hooks"
import plugin_react_refresh from "eslint-plugin-react-refresh"
import plugin_simple_import_sort from "eslint-plugin-simple-import-sort"
import typescript_eslint from "typescript-eslint"

export default typescript_eslint.config(
  { ignores: ["dist"] },
  {
    extends: [eslint.configs.recommended, ...typescript_eslint.configs.strictTypeChecked],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescript_eslint.parser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname }
    },
    plugins: {
      "react-hooks": plugin_react_hooks,
      "react-refresh": plugin_react_refresh,
      "simple-import-sort": plugin_simple_import_sort,
      react: plugin_react
    },
    rules: {
      ...plugin_react.configs.recommended.rules,
      ...plugin_react_hooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          multiline: "last",
          noSortAlphabetically: false,
          shorthandFirst: true
        }
      ],
      "react/react-in-jsx-scope": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "sort-keys": ["error", "asc", { caseSensitive: true, natural: false, minKeys: 2 }]
    },
    settings: {
      react: { version: "detect" }
    }
  }
)
