const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'test-webpack',
  mode: 'development', // 배포용: 'production' 
  devtool: 'eval',
  resolve: {
    extensions: [ '.jsx', '.js' ],
  },

  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: 
        [ 
          [
            '@babel/preset-env', 
            { 
              targets: { browsers: [ "> 5% in KR" ] },
              debug: true,
            },
          ], 
          '@babel/preset-react' 
        ],
        plugins: ['react-refresh/babel'],
      },
    }],
  },

  plugins: [
    new RefreshWebpackPlugin()
  ],

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },

  devServer: {
    publicPath: '/dist/',
    hot: true,
  }

}