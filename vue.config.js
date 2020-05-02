var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
 configureWebpack: () => {
   //if (process.env.NODE_ENV !== 'production') return

   return {
     plugins: [
       new PrerenderSpaPlugin(
         path.resolve(__dirname, 'dist'),
         [ '/', '/tutors'],
       ),
     ]
   }
 }
}
