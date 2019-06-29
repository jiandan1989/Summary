/**
 * @desc: 选择
 */
import React, { useState } from 'react'
import { Table, Checkbox, Tooltip } from 'antd'

import './index.less';

function SelectedTable(props) {
  const { columns = [], rowSelection, ...restProps } = props;
  const { selectedKeys = [], render, getCheckboxProps } = rowSelection;
  const [selectedRowKeys, setSelectedRowKeys] = useState(selectedKeys);
  const getChild = (text, record) => {
    return <Checkbox checked={selectedRowKeys.includes(record.id)} {...getCheckboxProps(record)} />;
  }
  columns.unshift({
    dataIndex: 'checkbox',
    title: rowSelection.selections || rowSelection.title || <Checkbox />,
    render(...rest) {
      if (render) {
        return render(getChild(...rest));
      }
      return getChild(...rest);
    },
  })
  
  return (
    <Table
      {...restProps}
      columns={columns}
      pagination={{ pageSize: 5}}
      rowSelection={rowSelection}
    />
  )
}

export default SelectedTable
