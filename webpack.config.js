const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './run.js'
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'compiled.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test:/\.(jpg|png|gif|svg|pdf)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'compiled.css',
            allChunks: true
        })
    ],
    devServer: {
        contentBase: "./www",
        historyApiFallback: {
          index: 'index.html'
        }
    }
};
