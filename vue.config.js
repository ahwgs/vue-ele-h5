module.exports = {
  lintOnSave: false,
  outputDir: './ele-h5-build',
  css: {
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
      '/n-layout-reconciliation': {
        target: 'http://192.168.1.6:8080',
        changeOrigin: true,
        secure: false,
        pathRewrite: {// 重写路径
          '^/': ''
        }
      }
    }
  }
}
