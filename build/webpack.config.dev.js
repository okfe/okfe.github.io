const path = require('path');
const webpack = require('webpack');
const env = require('./dev.env');
const base = require('./webpack.config.base');
const ip = require('ip');

const address = ip.address();

base.output.publicPath = `http://${address}:8080/`;

base.plugins.unshift(
  new webpack.DefinePlugin(env),
);

module.exports = Object.assign(base, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    hot: true,
    host: address,
    port: 8080
  },
  devtool: 'source-map'
});
