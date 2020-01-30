const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader',
                    ],
                }),
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ],
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            disable: process.env.NODE_ENV === 'development',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),

    ],
}
