
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
  lintOnSave: false,
  outputDir: './ele-h5-build',
  css: {
    extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  devServer: {
    open: true,
    hotOnly: true,
    proxy: {
      '/buju-market': {
        target: 'http://192.168.1.6:8380',
        changeOrigin: true,
        secure: false,
        pathRewrite: { // 重写路径
          '^/': ''
        }
      },

    }
  },
  configureWebpack: (config)=>{
    // vue骨架屏插件配置
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/utils/skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
    }))
  },
}
