module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  globals: {
    Nonull: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-var': 2,
        'eslint-disable-next-line': 0,
        'react-native/no-inline-styles': 0,
        'no-bitwise': 0,
      },
    },
  ],
};
