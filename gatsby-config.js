const plugins = require('./plugins');

module.exports = {
  siteMetadata: {
    title: `个人博客`,
    description: `学习使用 gatsby`,
    author: `凝聚者`,
    // siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    // social: {
    //   twitter: `kylemathews`,
    // },
  },
  pathPrefix: '/Summary/',
  plugins,
}