const {
  override,
  babelInclude,
  addWebpackAlias
} = require('customize-cra');
const path = require('path');
const fs = require('fs');

module.exports = override(
  babelInclude([
    path.resolve('src'), // make sure you link your own source
    fs.realpathSync('node_modules/@coreui/react')
  ]),
  addWebpackAlias({
    react: path.resolve('./node_modules/react'),
    'react-dom': path.resolve('./node_modules/react-dom')
  })
);