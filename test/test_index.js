/* eslint-env es5 */

// Require all modules ending in ".spec.js" from the
// 'src' directory and all subdirectories

var testsContext = require.context('../src', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

// Hide karma elements added to DOM
parent.document.getElementById('banner').style.display = 'none';
parent.document.getElementById('browsers').style.display = 'none';

var configure = require('enzyme').configure;
var Adapter = require('enzyme-adapter-react-16');

configure({adapter: new Adapter()});
