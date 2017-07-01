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
      browser: 'safari',
      browser_version: '8',
      os: 'OS X',
      os_version: 'Yosemite'
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
    bs_iphone_5s: {
      base: 'BrowserStack',
      device: 'iPhone 6',
      os: 'ios',
      os_version: '8.3',
      browser_version: null,
      browser: 'Mobile Safari'
    },
    bs_android_galaxy_s5_mini: {
      base: 'BrowserStack',
      realMobile: true,
      os: 'android',
      os_version: '4.4',
      browser: 'Android Browser',
      browser_version: null,
      device: 'Samsung Galaxy S5 Mini'
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
    browserNoActivityTimeout: 300e3,
    browserDisconnectTimeout: 300e3,
    browserDisconnectTolerance: 3,
    captureTimeout: 300e3,
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
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
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
                        '**/index.js',
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
        new webpack.DefinePlugin({
          __TEST__: true,
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })
      ]
    },
    webpackServer: {
      noInfo: true
    }
  };

  config.set(Object.assign({}, initialConfig, getBrowserStackConfig(config)));
};
