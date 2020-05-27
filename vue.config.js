module.exports = {
  //基础路径
  publicPath: './',
  //构建输入目录
  outputDir: 'build',
  //放置静态资源的目录
  assetsDir: 'static',
  //默认输出路径
  indexPath: 'index.html',
  //文件名哈希
  filenameHashing: true,
  //source map
  productionSourceMap: false,
  //服务
  devServer: {
      host: '0.0.0.0',
      //端口号
      port: 9000, 
      //启动打开浏览器
      // open: true,
      //跨域代理
      proxy: {
        '/api': {
          target: 'url',
          // ws: true,
          changeOrigin: true,
          pathRewrite: {     
            '^/api': '/'   
          }
        },
      }
  },
  //是否开启eslint
  lintOnSave: false,
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 图片压缩
    config.module
    .rule('images')
    .test(/\.(png|jpg|gif)$/)
    .use('url-loader')
    .loader('url-loader')
    .tap(options => {
        options.limit = 10000
      return options
    })
  },
}