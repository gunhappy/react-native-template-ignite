module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  env: {
    production: {},
  },
  plugins: [
    [
      'module-resolver', {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
      }
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-optional-catch-binding']
  ],
}
