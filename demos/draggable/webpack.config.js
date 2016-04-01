module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'babel-polyfill',
    './app.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets: ["es2015"]
        }
      },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'}
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    contentBase: "./"
  }
};