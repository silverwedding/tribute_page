const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/client/app');
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: BUILD_DIR + '/index.template.html'
});
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  entry: {
    javascript: APP_DIR + '/index.tsx'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js'
  },
  module: {
    loaders: [{
      enforce: 'pre',
      test: /\.js$/,
      include: APP_DIR,
      exclude: /node_modules/,
      loader: 'source-map-loader'
    }, {
      test: /\.tsx?$/,
      include: APP_DIR,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json']
  },
    // Configure webpack to import React when it is referenced
    // in a module that doesn't explicitly import it
    // (e.g. stateless component functions)
  plugins: [
    new WebpackCleanupPlugin({
      exclude: ['index.template.html']
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    HTMLWebpackPluginConfig
  ]
};
