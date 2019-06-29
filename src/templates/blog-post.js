/**
 * @desc: 模板
 */

import React, { Component, Fragment } from 'react'
import { BackTop, Divider, Button, Icon, Card } from 'antd'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'

import { conversionComponent } from '@/utils/conversion'
import BlogLayout from '@/layout'
import BlogLeaf from '@/components/BlogLeaf'
import TreeMenu from '@/components/TreeMenu'
import { getSiderMenu } from '@/utils/tree'
import AllComponents from '@/components'
import SEO from '@/components/seo'

const packagekeys = Object.keys(AllComponents)
const components = conversionComponent(AllComponents, packagekeys)

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components,
}).Compiler

class BlogPostTemplate extends Component {
  render() {
    const { data, pageContext, location } = this.props
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const menuData = getSiderMenu(post)

    return (
      <BlogLayout location={location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        {/* <PageHeader title='返回上一级' onBack={() => null} /> */}
        <Card
          title={
            <Fragment>
              <h2>{post.frontmatter.title}</h2>
              <date>{post.frontmatter.date}</date>
            </Fragment>
          }
          bordered={false}
        >
          {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
          {renderAst(post.htmlAst)}
          <Divider />
          <BlogLeaf {...pageContext} />
        </Card>
        <TreeMenu data={menuData} />
        <BackTop>
          <Button type='primary'>
            <Icon type='arrow-up' />
          </Button>
        </BackTop>
      </BlogLayout>
    )
  }
}

export default BlogPostTemplate

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
      htmlAst
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "YYYY MMMM DD")
      }
    }
  }
`
// html
