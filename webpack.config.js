var path = require('path');
var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/index'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: path.join('react-isomorphic-static-site-generator-boilerplate', 'bundle.js'),
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['react', ["es2015", { "modules": false }], "stage-0"]
            }
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/,
            options: {
                emitError: true,
                formatter: require("eslint-friendly-formatter")
            }
        }]
    },
    plugins: [
        new StaticSiteGeneratorPlugin({
            crawl: true,
            paths: [
                '/react-isomorphic-static-site-generator-boilerplate/'
            ]
        })
    ],
    externals: {
        //TODO declare react as external dependency and do not bundle with webpack
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: false,
        inline: false,
        port: 8080
    }
};
