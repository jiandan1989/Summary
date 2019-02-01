/**
 * @desc: 博客列表
 * @name: BlogList
 */

import React, { Component, Fragment } from 'react';
import { Link } from "gatsby"

import { List, Tag } from 'antd';

const { Item: ListItem } = List;
const { Meta: ListItemMeta } = ListItem;

class BlogList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <List
        size="large"
        // rowKey="id"
        itemLayout="vertical"
        dataSource={posts}
        renderItem={({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <ListItem key={node.fields.slug}>
              <ListItemMeta
                title={
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                }
                description={
                  <Fragment>
                    <Tag color="magenta">JAVASCRIPT</Tag>
                    <Tag color="purple">CSS</Tag>
                    <Tag color="#f47d31">HTML</Tag>
                  </Fragment>
                }
              />
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              发布于: <small>{node.frontmatter.date}</small>
            </ListItem>
          );
        }}
      />
    );
  }
}

export default BlogList;