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
  }
};