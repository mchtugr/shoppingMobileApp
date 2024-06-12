module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          '~': './src',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        allowlist: ['MAPS_API_KEY'],
        allowUndefined: false,
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
}
