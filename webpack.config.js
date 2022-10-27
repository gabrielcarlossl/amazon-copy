const path = require('path');

module.exports = {
  output: {
    filename: 'amazon_logo.png',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};