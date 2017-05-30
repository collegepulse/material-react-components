const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

function entry(env) {
  let entries = [];
  if (env.dev) {
    entries = [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ];
  }
  entries.push('./docs/index');
  return entries;
}

function getPlugins(env) {
  let plugins = [
    new CaseSensitivePathsPlugin()
  ];
  if (env.dev) {
    plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __TEST__: false
      })
    ];
  }
  if (env.docs) {
    plugins = [
      new HtmlWebpackPlugin({
        template: 'docs/material-react-components/index.html'
      }),
      new webpack.DefinePlugin({
        __TEST__: false,
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      })
    ];
  }
  return plugins;
}

module.exports = function config(env = {}) {
  return {
    devServer: {
      disableHostCheck: true,
      host: '0.0.0.0',
      hot: true,
      publicPath: '/material-react-components'
    },
    devtool: env.docs ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
    entry: entry(env),
    output: {
      path: path.resolve(__dirname, env.docs ? '.' : './dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader?modules&localIdentName=[name].[local]',
            'postcss-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
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
    plugins: getPlugins(env)
  };
};
