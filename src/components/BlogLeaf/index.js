/**
 * @desc: 上下篇
 * @name: BlogLeaf
 */

import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 24px;

  a {
    transition: all .2s linear;
    &:hover {
      text-shadow: 1px 1px currentColor;
    }
  }
`

function BlogLeaf({ previous, next }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default BlogLeaf;