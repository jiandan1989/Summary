import React from 'react'
import { Collapse, Icon, Tooltip } from 'antd'

import './index.less'

const { Panel: CollapsePanel } = Collapse

export function CodePanel({ children, title = "", ...rest }) {
  return (
    <Collapse
      bordered={false}
      className='expansion'
      expandIconPosition='left'
      defaultActiveKey={['code']}
      expandIcon={() => <Icon type='code' />}
    >
      <CollapsePanel header={(<Tooltip title="Show Code">Code</Tooltip>)} key='code' {...rest}>
        {children}
      </CollapsePanel>
    </Collapse>
  )
}
