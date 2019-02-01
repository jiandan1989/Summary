/**
 * @desc: 布局 Header
 * @name: LayoutHeader
 */

import React from 'react';
import { Link } from 'gatsby';
import { Menu, Affix } from 'antd';

import styled from 'styled-components';

const Wrapper = styled(Menu)`
  margin: 0 auto;
  max-width: 960px;
  margin-bottom: 12px;
`;

const LayoutHeader = () => {
  return (
    <Affix>
      <Wrapper mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="blogs">
          <Link to="/blogs">博客</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">关于我</Link>
        </Menu.Item>
      </Wrapper>
    </Affix>
  );
}

export default LayoutHeader;
