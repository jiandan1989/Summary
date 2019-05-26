/**
 * @desc: 自定义博客按钮
 * @name: BlogButton
 */

import React from 'react';

import { BlogButtonWrapper } from '../wrapper'

function BlogButton({ children, ...rest }) {
  return (
    <BlogButtonWrapper {...rest}>
      {children}
    </BlogButtonWrapper>
  );
}

export default BlogButton;
