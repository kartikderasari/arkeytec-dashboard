module.exports = {
  publicPath: './',

  pwa: {
    name: 'Arkeytec',
    themeColor: '#0962FF'
  },

  devServer: {
    proxy: {
      '^/.netlify/functions/*': {
        target: 'http://localhost:9000',
        pathRewrite: function (path, req) { return path.replace('/.netlify/functions', '') },
        changeOrigin: true
      }
    }
  }
}
