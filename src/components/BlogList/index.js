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
                    此处需要一张缩略图 @todo&nbsp;
                    <Tag color="magenta">Javascript</Tag>
                    <Tag color="#f47d31">TypeScript</Tag>
                    <Tag color="purple">css</Tag>
                    <Tag color="#f47d31">html</Tag>
                  </Fragment>
                }
              />
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              {/* 创建时间: @todo */}
              <br />
              最后修改: <small>{node.frontmatter.date}</small>
            </ListItem>
          );
        }}
      />
    );
  }
}

export default BlogList;