const cssvariables = require('./src/variables');

module.exports = () => ({
  plugins: [
    require('postcss-simple-vars')({
      variables: () => (
        cssvariables
      )
    }),
    require('autoprefixer')({
      browsers: [
        'last 4 versions',
        'Android >= 4.4',
        'Chrome >= 49',
        'Edge >= 12',
        'Firefox >= 51',
        'IE >= 11',
        'iOS >= 8.4',
        'Safari >= 8'
      ]
    }),
  ]
});
