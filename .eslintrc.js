module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  extends: ["@feature-sliced"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        CallExpression: { arguments: "first" },
        FunctionDeclaration: { parameters: "first" },
        FunctionExpression: { parameters: "first" },
        SwitchCase: 1,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-this-alias": "error",
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "single"],
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-var-requires": "error",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Object: false,
          object: false,
        },
        extendDefaults: true,
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error", { ignoreTypeValueShadow: true }],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "enumMember", format: null },
    ],
    "jsdoc/no-types": "error",

    // import rules
    "import/prefer-default-export": "off",
    "import/no-deprecated": "warn",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external"],
        pathGroups: [
          {
            pattern: "+(~|@)/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "src/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      },
    ],
    "no-restricted-imports": ["error", "rxjs/Rx"],

    // parens and brackets rules
    "space-in-parens": ["error", "never"],
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    curly: ["error", "multi-line"],
    "arrow-parens": ["error", "always"],
    "object-curly-newline": ["error", { consistent: true }],

    // function rules
    "prefer-arrow-callback": "error",

    // constructor and new rules
    "no-new-wrappers": "error",
    "no-new-func": "error",

    // switch case rules
    "no-fallthrough": "error",

    // generic rules
    "max-len": ["error", { code: 170 }],
    "no-console": ["error", { allow: ["log", "error"] }],
    "no-magic-numbers": ["error", { ignore: [-1, 0, 1, 2, 100, 500, 1000] }],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "prefer-template": "error",
    "linebreak-style": ["off"],
    "eol-last": ["error", "always"],

    // disabling or easing unwanted rules
    "comma-dangle": ["error", "always-multiline"],
    "arrow-body-style": "off",
    "implicit-arrow-linebreak": "off",
    "id-blacklist": "off",
    "guard-for-in": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": "off",
    "default-case": "off",
    "no-confusing-arrow": "off",
    "no-nested-ternary": "off",
    "consistent-return": "off",
    "no-return-assign": ["error", "except-parens"],
    "no-param-reassign": "off",
    "operator-linebreak": ["off", "after", { overrides: { "=": "after" } }],
    "no-prototype-builtins": "off",
    "space-before-function-paren": "off",
    "no-throw-literal": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/prefer-literal-enum-member": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/dot-notation": "off",
    "import/no-cycle": "off",
  },
};
