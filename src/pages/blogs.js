/**
 * @name: BlogPage
 * @desc: 博客页
 */

import React from 'react';
import { graphql } from 'gatsby';

import BlogLayout from '@/layout';
import BlogList from '@/components/BlogList';
import SEO from '@/components/seo';

import { Card } from 'antd';

function BlogPage({ data, location, ...rest }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  return (
    <BlogLayout location={location} title={siteTitle}>
      <SEO title="Blog" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Card
        bordered={false}
        style={{ marginTop: 24 }}
        title="此处需要添加可搜索(分页 / 标签分类 / 时间排序)"
        extra="需添加跳转及重新设计页面风格"
        bodyStyle={{ padding: '8px 32px 32px' }}>
        <BlogList posts={posts} />
      </Card>
    </BlogLayout>
  );
}

export default BlogPage;

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
            title
            date(formatString: "YYYY MMMM DD")
          }
        }
      }
    }
  }
`;
