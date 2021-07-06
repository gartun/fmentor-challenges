const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/env"],
          plugins: ["@babel/transform-arrow-functions"]
        }
      }
    ]
  },
  mode: "development",
  target: ["web" ,"es5"],
  devServer: {
    contentBase: './dist',

  }
}