// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/note_css_js/my-note/dist/'
    : '/'
  //publicPath:'/note_css_js/my-note/dist/'
}