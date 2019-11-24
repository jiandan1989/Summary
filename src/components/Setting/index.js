/**
 * @name: Setting
 * @desc: 整体配置
 */

import React, { Fragment, useState } from 'react';
import { Icon, Affix, Drawer, Button } from 'antd';

import styled from 'styled-components';
import useWindowSize from '@/hooks/useWindowSize';

const AffixWrapper = styled(Affix)`
  .ant-affix {
    left: 0;
    z-index: 1001;
    transition: padding-left 0.3s cubic-bezier(0.7, 0.3, 0.1, 1) 60ms;
    padding-left: ${(props) => (props.visible === 'true' ? '256px' : 0)};
  }
`;

function Setting() {
  const { height } = useWindowSize();
  const [visible, setVisible] = useState(false);

  function showDrawer() {
    setVisible(true);
  }

  function closeDrawer() {
    setVisible(false);
  }

  return (
    <Fragment>
      <AffixWrapper
        visible={`${visible}`}
        offsetTop={height / 2}
        // target={() => document.body}
      >
        <Button
          type="primary"
          style={{ borderLeft: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          onClick={() => { setVisible(prevVisible => !prevVisible)}}>
          <Icon type={visible ? 'close' : 'setting'} />
        </Button>
      </AffixWrapper>
      <Drawer
        placement="left"
        bodyStyle={{ position: 'relative' }}
        className="nhf_drawer"
        visible={visible}
        onClose={closeDrawer}>
        visible
      </Drawer>
    </Fragment>
  );
}

export default Setting;
