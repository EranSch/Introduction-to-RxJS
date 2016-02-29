module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8080', './app.js' ],
  output: 'bundle.js',
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'}
  ],
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    contentBase: "./",
  }
}
