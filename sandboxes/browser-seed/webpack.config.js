module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8080', './app.js' ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
  ],
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    contentBase: "./",
  }
}
