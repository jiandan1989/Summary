/**
 * @name: BlogPage
 * @desc: 博客页
 */

import React from "react";
import { graphql } from "gatsby";

// import Bio from "../components/Bio";
import BlogLayout from "../components/BlogLayout";
import SEO from "../components/seo";
import BlogList from '../components/BlogList';

import { Card } from 'antd';

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Card
          style={{ marginTop: 24 }}
          bordered={false}
          bodyStyle={{ padding: '8px 32px 32px 32px' }}
        >
          <BlogList posts={posts} />
        </Card>
        {/* <Bio /> */}
      </BlogLayout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`