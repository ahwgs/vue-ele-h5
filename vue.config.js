const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

const resolve = (dir) => {
  return path.join(__dirname, dir);
}

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
      '/eleapi': {
        target: ' https://easy-mock.com/mock/5c83adf76ed1b709ab872a75/',
        changeOrigin: true,
        secure: false,
        ws: false,
        pathRewrite: { // 重写路径
          '^/eleapi': '/'
        }
      },

    }
  },
  configureWebpack: (config) => {
    // vue骨架屏插件配置
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: resolve('./src/utils/skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
    }))
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@utils', resolve('src/utils'))
  }
}
