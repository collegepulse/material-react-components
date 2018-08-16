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

function getBrowserStackConfig(config) {
  const username = process.env.BROWSER_STACK_USERNAME;
  const accessKey = process.env.BROWSER_STACK_ACCESS_KEY;
  if (config.browsers.length || (!username && !accessKey)) {
    return {};
  }

  const customLaunchers = {
    bs_firefox_mac: {
      base: 'BrowserStack',
      browser: 'firefox',
      browser_version: '45',
      os: 'OS X',
      os_version: 'Yosemite'
    },
    bs_chrome_mac: {
      base: 'BrowserStack',
      browser: 'chrome',
      browser_version: '49',
      os: 'OS X',
      os_version: 'Yosemite'
    },
    bs_safari_mac: {
      base: 'BrowserStack',
      os: 'OS X',
      os_version: 'Sierra',
      browser: 'Safari',
      browser_version: '10.1',
    },
    bs_ie_windows: {
      base: 'BrowserStack',
      browser: 'ie',
      browser_version: '11',
      os: 'Windows',
      os_version: '8.1'
    },
    bs_edge_windows: {
      base: 'BrowserStack',
      browser: 'edge',
      browser_version: '14',
      os: 'Windows',
      os_version: '10'
    },
    bs_android_galaxy_s6: {
      base: 'BrowserStack',
      real_mobile: true,
      os: 'android',
      os_version: '5.0',
      browser: 'Android Browser',
      browser_version: null,
      device: 'Samsung Galaxy S6'
    }
  };

  return {
    browserStack: {
      username,
      accessKey
    },
    customLaunchers,
    browsers: Object.keys(customLaunchers)
  };
}

const babelOptions = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      "babel-plugin-transform-define", {
        "__TEST__": true
      }
    ],
    [
      'babel-plugin-istanbul', {
        exclude: [
          '**/index.js',
          '**/*.spec.js',
          'test/test_index.js'
        ]
      }
    ]
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'Firefox >= 45',
            'Chrome >= 49',
            'Safari >= 8',
            'IE >= 11',
            'Edge >= 14',
            'iOS >= 10',
            'Android >= 5'
          ]
        }
      }
    ],
    '@babel/preset-react'
  ]
};

module.exports = function (config) {
  const initialConfig = {
    browserConsoleLogOptions: {
      level: '',
      format: '%b %T: %m',
      terminal: true
    },
    browsers: [
      'PhantomJSWithArgs'
    ],
    browserNoActivityTimeout: 60e3,
    browserDisconnectTimeout: 60e3,
    browserDisconnectTolerance: 3,
    captureTimeout: 60e3,
    client: {
      captureConsole: true,
      mocha: {
        timeout: 1000000e3
      }
    },
    coverageReporter: {
      dir: '.coverage/',
      reporters: [
        {
          type: 'lcov',
          subdir: '.'
        }
      ]
    },
    customContextFile: sourcemaps ? null : 'test/context.html',
    customLaunchers: {
      PhantomJSWithArgs: {
        base: 'PhantomJS',
        options: {
          viewportSize: {
            width: 1024,
            height: 768
          }
        }
      }
    },
    files: [
      './node_modules/core-js/client/core.js',
      'test/test_index.js'
    ],
    frameworks: [
      'mocha'
    ],
    preprocessors: getPreprocessors(),
    reporters: [
      'mocha',
      'coverage',
      'coveralls'
    ],
    singleRun: true,
    webpack: {
      devtool: 'source-map',
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
      },
      mode: 'development',
      module: {
        rules: [
          // Run regular source code through babel
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: babelOptions
            }
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader?modules&localIdentName=[name].[local]',
              'postcss-loader'
            ]
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'babel-loader',
                options: babelOptions
              },
              'react-svg-loader'
            ]
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('development')
          }
        })
      ],
      target: 'web'
    },
    webpackServer: {
      noInfo: true
    }
  };

  config.set(Object.assign({}, initialConfig, getBrowserStackConfig(config)));
};
