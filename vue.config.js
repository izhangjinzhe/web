module.exports = {
  devServer: {
    proxy: 'http://zhangjinzhe.cn:17777/'
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '风间'
      return args
    })
  }
}
