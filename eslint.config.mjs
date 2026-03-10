import { defineConfig } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    extends: compat.extends('@haraka'),

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
        server: true,
        OK: true,
        CONT: true,
        DENY: true,
        DENYSOFT: true,
        DENYDISCONNECT: true,
        DENYSOFTDISCONNECT: true,
        NEXT_HOOK: true,
      },
    },
    rules: {
      'semi-style': ['error', 'last'],
      'prefer-template': 'warn',
      'no-unneeded-ternary': 1,
      'no-unused-vars': 'warn',
    },
  },
])
