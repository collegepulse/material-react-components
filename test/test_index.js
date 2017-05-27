// require all modules ending in ".spec.js" from the
// 'src' directory and all subdirectories

var testsContext = require.context('../src', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
