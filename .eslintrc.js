module.exports = {
    "env": {
      "browser": true,
      "node": true
    },
    "plugins": ["svelte3", "compat"],
    "extends": [
      "eslint:recommended",
      "airbnb-base",
      "plugin:jest/recommended",
      "plugin:compat/recommended"
    ],
    "overrides": [
        {
          "files": ["*.svelte"],
          "processor": "svelte3/svelte3"
        }
    ],
    "rules": {
      "no-param-reassign": 0,
      "import/prefer-default-export": 0,
      "no-bitwise": 2,
      "camelcase": 1, 
      "curly": 2,
      "eqeqeq": 2,
      "guard-for-in": 2,
      "no-extend-native": 2,
      "wrap-iife": 0, 
      "no-use-before-define": [
        2,
        {
          "functions": false
        }
      ],
      "new-cap": 0, 
      "no-caller": 2,
      "no-empty": 2,
      "no-irregular-whitespace": 2,
      "no-new": 0, 
      "no-plusplus": [
        1,
        {
          "allowForLoopAfterthoughts": true
        }
      ],
      "quotes": [
        2,
        "single",
        {
          "avoidEscape": true
        }
      ],
      "no-undef": 2,
      "no-unused-vars": [
        "error",
        {
          "args": "none"
        }
      ],
      "strict": 2,
      "max-params": [
        "error",
        {
          "max": 7
        }
      ],
      "max-depth": 1, // Good to have
      "max-statements": [
        "error",
        {
          "max": 100
        }
      ],
      "max-lines": [
        "error",
        {
          "max": 1000
        }
      ],
      "complexity": [
        "error",
        {
          "max": 10
        }
      ],
      "max-len": 0,
      "no-var": 0,
      "semi": 2,
      "no-cond-assign": 0,
      "no-debugger": 2,
      "no-eq-null": 2,
      "no-eval": 2, //
      "no-unused-expressions": 0,
      "no-mixed-spaces-and-tabs": 1,
      "no-trailing-spaces": 1,
      "no-tabs": 1,
      "block-scoped-var": 0,
      "no-iterator": 0,
      "linebreak-style": "off",
      "comma-style": [2, "last"],
      "no-loop-func": 1,
      "no-multi-str": 1,
      "require-yield": 0,
      "valid-typeof": 1,
      "no-proto": 0,
      "no-script-url": 2,
      "no-shadow": 2,
      "dot-notation": [
        1,
        {
          "allowPattern": "^[a-z]+(_[a-z]+)+$"
        }
      ],
      "no-new-func": 1,
      "no-new-wrappers": 1,
      "no-invalid-this": 0,
      "no-useless-escape": 1,
      "object-shorthand": ["warn", "properties"],
      "array-callback-return": "error",
      "compat/compat": "error",
      "jest/valid-expect": "off"
    },
    "settings": {
      "svelte3/ignore-styles": () => true
    }
  }
  