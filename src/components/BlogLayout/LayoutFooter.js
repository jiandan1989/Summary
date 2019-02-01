/**
 * @desc: 布局Footer
 * @name: LayoutFooter
 */

import React from 'react';

import { Affix } from 'antd';

function LayoutFooter() {
  return (
    <Affix offsetBottom={0}>
      <footer>footer</footer>
    </Affix>
  );
}

export default LayoutFooter;