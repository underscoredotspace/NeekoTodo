module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "plugin:react/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "jest", "@typescript-eslint"],
    rules: {
        "no-console": [
            "warn",
            {
                allow: ["warn", "error", "info", "debug"],
            },
        ],
        "no-debugger": "warn",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                argsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/no-inferrable-types": "off",
    },
    env: {
        node: true,
        browser: true,
        es6: true,
        "jest/globals": true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}
