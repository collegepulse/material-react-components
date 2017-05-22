const cssvariables = require('./src/variables');

module.exports = () => ({
  plugins: {
    'postcss-simple-vars': {
      variables: () => (
        cssvariables
      )
    },
    autoprefixer: {
      browsers: ['last 4 versions']
    }
  }
});
