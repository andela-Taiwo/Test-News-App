const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: './src/js/app.js',
  resolve: {
    // allows you to require without the .js at end of filenames
    // import Component from 'component' vs.import Component from 'component.js'
    extensions: ['.js', '.json', '.jsx']
  },
  output: {
    path: __dirname+ '/src',
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react'],
       }
      },
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default) 
      safe: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_KEY: JSON.stringify(process.env.API_KEY),
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]

};
