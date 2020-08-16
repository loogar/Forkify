const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry:['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    devServer: {
       contentBase: './dist'
    },
    plugins: [
        new htmlwebpackplugin({
            filename: "index.html",
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};

