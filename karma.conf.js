var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};




// var webpackConfig= require('./webpack.config.js');

// module.exports = function (config) {
//   config.set({
//     // specify the browsers its to be run in. Real life browsers;
//     browsers: ['Chrome'],
//     singleRun: true,
//     frameworks: ['mocha'],
//     files: ['app/tests/**/*.test.jsx'],
//     preprocessors: {
//       'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
//     },
//     reporters: ['mocha'],
//     // stops the website from loading or the test from running. Since it knows it's a failed test.
//     // se it to run for 5seconds:
//     client: {
//       mocha: {
//         timeout: '5000'
//       }
//     },
//    webpack: webpackConfig,
//    webpackServer: {
//      noInfo: true
//    }
//   });
// };