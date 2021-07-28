const CompressionWebpackPlugin = require('compression-webpack-plugin')

const productionGzipExtensions = ['js', 'css']
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    productionSourceMap: false,
    assetsDir: "assets",
    lintOnSave: false,      // 禁用eslint
    configureWebpack: config => {
        if (isProd) {
                config.plugins.push(new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.('+ productionGzipExtensions +')$'),
                    threshold: 10240,
                    minRatio: 0.8
                }))
        }
    },

}