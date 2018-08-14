const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    './test/ssr.js'
  ],
  output: {
    path: path.resolve(__dirname, './.tmp'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
          'css-loader?modules&localIdentName=[name].[local]',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          'react-svg-loader'
        ]
      }
    ]
  },
  target: 'node'
};
