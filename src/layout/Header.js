/**
 * @desc: 布局 Header
 * @name: Header
 */

import React from 'react';
import { Link } from 'gatsby';
import { Menu, Affix } from 'antd';

import { HeaderWrapper } from '@/components/wrapper';

function Header() {
  return (
    <Affix>
      <HeaderWrapper mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="blogs">
          <Link to="/blogs">博客</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">关于我</Link>
        </Menu.Item>
      </HeaderWrapper>
    </Affix>
  );
}

export default Header;
