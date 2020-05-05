module.exports = {
  pluginOptions: {
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://keetela.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, 
    routes: routes
  }
}
