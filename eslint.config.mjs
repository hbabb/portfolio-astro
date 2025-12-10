import antfu from '@antfu/eslint-config';

export default antfu(
  {
    type: 'app',
    typescript: true,
    formatters: true,
    react: true,
    astro: true,
    stylistic: false,
  },
  {
    rules: {
      'ts/no-redeclare': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],
      'no-console': ['warn'],
      'antfu/no-top-level-await': ['off'],
      'node/prefer-global/process': ['off'],
      'node/no-process-env': ['error'],
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['^~/.+', '^@/.+'],
          tsconfig: {
            rootDir: '.',
            filename: 'tsconfig.json',
          },
        },
      ],
    },
  }
);
