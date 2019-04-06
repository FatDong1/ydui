const path = require('path');
const baseConf = require('./webpack.demo.base.conf.js');
const merge = require('webpack-merge');


module.exports = merge(baseConf, {
    mode: 'development',
    output: {
        publicPath: '',
    },
    devtool: 'cheap-module-eval-source-map',
    plugins:[

    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/sites/'),
        index: 'demo.html',
        compress: true, //gzip压缩
        historyApiFallback: true,
        disableHostCheck: true
    }
});