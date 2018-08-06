const path = require('path');
// const webpack = require('webpack');

// var html = require('./index.pug');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
        // app: './src/index.js',
        app: path.resolve(src, 'index.js')
    },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].main.js',
    // path: path.resolve(__dirname, 'dist'),
    path: dist,
    publicPath: '/'
  },
  module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.pug/,
                loaders: ['html-loader', 'pug-html-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    target: 'web'
};