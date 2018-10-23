var path = require('path');
var webpack = require ('webpack');

module.exports = {
  mode: 'development',
  entry: [
    './index.js'
  ],
  
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env','@babel/preset-react']
            }
        },
        {
            test: /\.css?$/,
            use:['style-loader','css-loader'] 
        }
    ]
  },
  
  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
  ],
  
  resolve: {
    extensions: [".css", ".js", ".jsx"],
    alias: {
      "app": path.resolve(__dirname, "src/"),
      "bootstrap": path.resolve(__dirname, "node_modules/bootstrap/dist")
    }
  }
};