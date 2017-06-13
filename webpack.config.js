const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].css"
});

var config = {
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-source-map' : 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      './web/static/js/app.js',
      './web/static/css/app.scss'
    ]
  },
  output: {
    path: path.join(__dirname, "./priv/static"),
    filename: "js/[name].js",
    publicPath: "http://localhost:4002/"
  },
  resolve: {
    modules: [
      "node_modules",
      path.join(__dirname, 'web', 'static', 'js')
    ]
  },
  plugins: [
    extractSass,
    new CopyWebpackPlugin([{ from: "./web/static/assets" }]),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: extractSass.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.eot$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  devServer: {
    port: 4002,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};

module.exports = config;
