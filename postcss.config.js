const cssvariables = require('./src/variables');

module.exports = () => ({
  plugins: [
    require('postcss-simple-vars')({
      variables: () => (
        cssvariables
      )
    }),
    require('autoprefixer')()
  ]
});
