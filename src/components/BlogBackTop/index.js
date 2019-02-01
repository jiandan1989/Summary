/**
 * @desc: 回到顶部
 * @name: BlogBackTop
 */

import React from 'react';
import { BackTop, Button, Icon } from 'antd';
// import BlogButton from '../BlogButton';

function BlogBackTop() {
  return (
    <BackTop>
      <Button type="primary">
        <Icon type="arrow-up" />
      </Button>
    </BackTop>
  );
}

export default BlogBackTop;
