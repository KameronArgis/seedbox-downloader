const path = require('path');

module.exports = {
  entry: path.resolve('client/src/index.js'),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx', 'babel-plugin-styled-components'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve('client/public'),
  },
  devtool: 'eval-source-map',
  mode: 'development',
};