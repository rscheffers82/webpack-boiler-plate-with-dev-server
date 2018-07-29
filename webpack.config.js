const CopyWebpackPlugin = require('copy-webpack-plugin')

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
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/public/index.html', to: './index.html' }
        ])
    ],
    devServer: {
        contentBase: __dirname + '/dist',
        port: 1234,
        historyApiFallback: {
            index: 'index.html'
        }
    }
}