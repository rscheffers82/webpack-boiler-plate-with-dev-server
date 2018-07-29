const webpack = require('webpack');
const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
    entry: __dirname + '/src/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.sass', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        contentBase: __dirname + '/dist',
        port: 1234,
        historyApiFallback: {
            index: 'index.html'
        }
    }
}