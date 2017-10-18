const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
    contentBase: 'static',
    proxy: {
      '/': {
        target: 'http://localhost:3000',
      },
    },
  },
  module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  }
};
