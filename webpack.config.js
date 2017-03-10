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
        filename: 'compiled.js',
        sourceMapFilename: 'sourceMap.js.map'
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
                test:/\.(jpg|png|gif|svg|pdf|otf|ttf)$/,
                loader: 'file-loader?name=/assets/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'compiled.css',
            allChunks: true
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./www",
        historyApiFallback: {
          index: 'index.html'
        }
    }
};
