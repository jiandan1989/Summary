/**
 * @desc: 容器
 */

import styled from 'styled-components'
import { Menu } from 'antd'

export const LayoutWrapper = styled.div`
  height: 100vh;
`

export const ContentWrapper = styled.main`
  margin: 0 auto;
  max-width: 960px;
  height: calc(100% - 48px);
  padding: 24px;
`

export const HeaderWrapper = styled(Menu)`
  margin: 0 auto;
  max-width: 960px;
  margin-bottom: 12px;
`

export const BlogButtonWrapper = styled.a`
  padding: 8px 12px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  bacgkround: ${(props) => props.bg || 'transparent'};
  background-image: ${(props) => props.bgImage};

  &:hover {
    background-position: right center;
  }
`
// 上下篇
export const BlogLeafWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 24px;

  a {
    transition: all 0.2s linear;
    &:hover {
      text-shadow: 1px 1px currentColor;
    }
  }
`
