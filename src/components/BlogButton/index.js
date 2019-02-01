/**
 * @desc: 自定义博客按钮
 * @name: BlogButton
 */

import React, { children } from 'react';
import styled from 'styled-components';

const BlogButtonWrapper = styled.a`
  padding: 8px 12px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  bacgkround: ${props => props.bg || 'transparent'};
  background-image: ${props => props.bgImage};

  &:hover {
    background-position: right center;
  }
`;

function BlogButton({ children, ...rest }) {
  return (
    <BlogButtonWrapper {...rest}>
      {children}
    </BlogButtonWrapper>
  );
}

export default BlogButton;
