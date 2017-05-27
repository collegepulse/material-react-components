const sourcemaps = !process.env.SOURCEMAPS === 'false';
const webpack = require('webpack');

function getPreprocessors() {
  const preprocessors = ['webpack'];
  if (sourcemaps) {
    preprocessors.push('sourcemap');
  }
  return {
    'test/test_index.js': preprocessors
  };
}

module.exports = function (config) {
  config.set({
    browserConsoleLogOptions: {
      level: 'log'
    },
    browsers: [
      'PhantomJS'
    ],
    coverageIstanbulReporter: {
      dir: '.coverage/',
      includeAllSources: true,
      type: 'html',
      watermarks: {
        statements: [80, 90],
        functions: [80, 90],
        branches: [80, 90],
        lines: [80, 90]
      }
    },
    customContextFile: sourcemaps ? null : 'test/context.html',
    files: [
      'test/test_index.js'
    ],
    frameworks: [
      'mocha'
    ],
    preprocessors: getPreprocessors(),
    reporters: [
      'coverage-istanbul'
    ],
    singleRun: true,
    webpack: {
      devtool: 'cheap-module-inline-source-map',
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
      },
      module: {
        exprContextCritical: false,
        rules: [
          // Run regular source code through babel
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                plugins: [
                  'empower-assert',
                  [
                    'espower', {
                      embedAst: true
                    }
                  ],
                  [
                    'istanbul', {
                      exclude: [
                        '**/*.spec.js',
                        'test/test_index.js'
                      ]
                    }
                  ]
                ],
                presets: [
                  [
                    'es2015',
                    {
                      modules: false
                    }
                  ]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader?modules&localIdentName=[name].[local]',
              'postcss-loader'
            ]
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          __TEST__: true
        })
      ]
    },
    webpackServer: {
      noInfo: true
    }
  });
};
