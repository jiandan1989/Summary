/**
 * @desc: 布局 Header
 * @name: Header
 */

import React from 'react';
import { Affix } from 'antd';
import Nav from './Nav';

import ProgressView from './Progress';

function Header() {
  return (
    <Affix>
      <ProgressView />
      <Nav />
    </Affix>
  );
}

export default Header;
