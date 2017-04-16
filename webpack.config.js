const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].css"
});

var config = {
  entry: {
    'app': [
      './web/static/js/app.js',
      './web/static/css/app.scss'
    ]
  },
  output: {
    path: path.join(__dirname, "./priv/static"),
    filename: "js/[name].js"
  },
  resolve: {
    modules: [
      "node_modules",
      path.join(__dirname, 'web', 'static', 'js')
    ]
  },
  plugins: [
    extractSass,
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
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
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.eot$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
};

module.exports = config;
