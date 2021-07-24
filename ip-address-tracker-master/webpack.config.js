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
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  "resolve": {
    extensions: [".ts", ".js"]
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