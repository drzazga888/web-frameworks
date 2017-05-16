var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
	  react: './react-src/main.js',
	  angular: './angular-src/main.js'
  },
  output: {
    path: path.join(__dirname, 'WebContent'),
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};