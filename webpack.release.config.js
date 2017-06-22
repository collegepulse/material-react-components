const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
}

function getEntryPoints() {
  const components = getDirectories(path.join(__dirname, '/src'));
  return components.reduce((acc, currentVal) => {
    if (currentVal !== 'utils') {
      acc[currentVal] = path.join(__dirname, '/src/', currentVal);
    }
    return acc;
  }, {});
}

module.exports = {
  entry: getEntryPoints(),
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};
