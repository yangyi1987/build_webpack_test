module.exports = {
  // "extends": ["eslint:recommended", "airbnb-base"],
  "extends": [ 'plugin:vue/essential', 'airbnb-base' ],

  "plugins": [
    "html",
    "vue"
  ],
  "parserOptions": {
  "parser":  "babel-eslint",
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "no-console": "error",
  },
}
