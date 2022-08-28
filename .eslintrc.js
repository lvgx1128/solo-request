module.exports = {
  overrides: [
    {
      files: '*.ts',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier'
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      },
      rules: {
        '@typescript-eslint/semi': ['error', 'never', { beforeStatementContinuationChars: 'always' }],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/prefer-includes': 'off', // indexof用include
        '@typescript-eslint/explicit-function-return-type': 'off', // indexof用include
        '@typescript-eslint/interface-name-prefix': 'off'
      }
    }
  ]
}
