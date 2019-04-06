const webpack = require('webpack');
const config = require('../package.json');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConf = require('./webpack.base.conf.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rimraf = require('rimraf');
const merge = require('webpack-merge');

rimraf('./dist/ydui.min.js', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/ydui.min.css', function (err) {
    if (err) console.log(err);
});

module.exports = merge(webpackBaseConf, {
    mode: 'production',
    entry: {
        ydui: './src/ydui.js',
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'ydui.min.js',
        library: 'ydui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                },
                sourceMap: false,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
});