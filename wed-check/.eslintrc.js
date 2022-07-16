module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
<<<<<<< Updated upstream
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
=======
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "@vue/eslint-config-prettier"
>>>>>>> Stashed changes
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
