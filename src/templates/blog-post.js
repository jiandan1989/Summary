/**
 * @desc: 模板
 */

import React, { Component } from "react";
import { graphql } from "gatsby";

import BlogLayout from "../components/BlogLayout";
import SEO from "../components/seo";
import BlogLeaf from '../components/BlogLeaf';
import BlogBackTop from '../components/BlogBackTop';

class BlogPostTemplate extends Component {
  render() {
    const { data, pageContext, location } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <BlogLayout location={location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <BlogLeaf {...pageContext} />
        <BlogBackTop />
      </BlogLayout>
    )
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "YYYY / MM / DD")
      }
    }
  }
`