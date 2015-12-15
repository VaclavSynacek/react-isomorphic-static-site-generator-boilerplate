var path = require('path');
var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var routes = [
    '/react-isomorphic-static-site-generator-boilerplate/',
    '/react-isomorphic-static-site-generator-boilerplate/products/',
    '/react-isomorphic-static-site-generator-boilerplate/product/something/',
    '/react-isomorphic-static-site-generator-boilerplate/product/somethingelse/',
    '/react-isomorphic-static-site-generator-boilerplate/product/anotherthing/'
];


module.exports = {
    entry: {
        'main': './src/index'
    },
    output: {
        path: path.join(__dirname,  'public'),
        filename: path.join('react-isomorphic-static-site-generator-boilerplate','bundle.js'),
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?optional[]=runtime&stage=0'
        }],
        preLoaders: [{
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }]
    },
    plugins: [
        new StaticSiteGeneratorPlugin('main', routes, null)
    ],
    externals: {
        //TODO declare react as external dependency and do not bundle with webpack
    },
    eslint: {
        emitError: true,
        formatter: require("eslint-friendly-formatter")
    }
};
