/**
 * @desc: 上下篇
 * @name: BlogLeaf
 */

import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'antd';

import { BlogLeafWrapper } from '../wrapper';

function BlogLeaf({ previous, next }) {
  return (
    <BlogLeafWrapper>
      {previous && (
        <Link to={previous.fields.slug} rel="prev">
          <Icon type="arrow-left" /> {previous.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} <Icon type="arrow-right" />
        </Link>
      )}
    </BlogLeafWrapper>
  );
}

export default BlogLeaf;