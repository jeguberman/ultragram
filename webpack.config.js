var path = require("path");
var webpack = require("webpack");

var plugins =[];//plugins for both dev and production
var devPlugins = [];//plugins exclusive to development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: structures}
    })
  ];

  plugins = plugins.concat(
    process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
  );


module.exports = {
  context: __dirname,
  entry: "./frontend/ultragram.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
