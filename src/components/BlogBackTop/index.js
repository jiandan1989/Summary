/**
 * @desc: 回到顶部
 * @name: BlogBackTop
 */

import React from 'react';
import { BackTop, Button, Icon } from 'antd';

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
