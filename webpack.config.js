const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: path.resolve(__dirname, 'index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, ''),
        use: ['babel-loader']
      }]
    },
    devServer: {
      contentBase:  path.resolve(__dirname, 'dist'),
      port: 8000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html" //source html
      })
    ]
  };
