
// https://www.gatsbyjs.org/tutorial/part-one/
// https://source.unsplash.com/random/1200x800
import React from "react";
import { graphql } from "gatsby";
import { BackTop } from 'antd';


import BlogLayout from "../components/BlogLayout"
import SEO from "../components/seo";


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `ant-design`]}
        />
        <img src="https://source.unsplash.com/random/1200x800" />
        <BackTop />
      </BlogLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`