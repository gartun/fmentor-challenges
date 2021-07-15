const { resolve } = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  target: ['web', 'es5'],
  mode: 'production',
  devServer: {
    contentBase: './wpack/dist/',
    allowedHosts: [
      'http://localhost:8081/dist/'
    ]
  }
}