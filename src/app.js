// remap global promise
require('babel-runtime/core-js/promise').default = window.Promise = require('bluebird');

// configure it
require('bluebird').config({
  longStackTraces: __DEV__,
  warnings: false
});

require('./main');
