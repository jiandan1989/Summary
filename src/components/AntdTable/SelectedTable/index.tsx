/**
 * @desc: 选择
 */
import React from 'react'
import { Tooltip } from 'antd';

import { getColumns, getRowSelection } from './config'
import SelectedTable from './SelectedTable';
import mockData from '../mock'

function SelectedTableDemo(props) {
  const columns = getColumns();
  const rowSelection = getRowSelection({ render(child) {
    return <Tooltip title="child">{child}</Tooltip>
  }});
  return (
    <SelectedTable rowKey='id' columns={columns} rowSelection={rowSelection} dataSource={mockData} />
  )
}

export default SelectedTableDemo
