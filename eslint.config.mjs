import { defineConfig } from "eslint/config";
import haraka from "eslint-plugin-haraka";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:haraka/recommended",
        "plugin:prettier/recommended",
    ),

    plugins: {
        haraka,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.node,
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
        "semi-style": ["error", "last"],
        "prefer-template": "warn",
        "no-unneeded-ternary": 1,
    },
}]);