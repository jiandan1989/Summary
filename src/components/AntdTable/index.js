/**
 * @desc:   Table 相关
 * @author: NHF
 */

import React from 'react';
import { Card } from 'antd';

import SelectedTable from './SelectedTable';

function AntdTable() {
  return (
    <Card bordered={false} title="CheckBox禁用展示">
      antd table 未支持自定义 render checkbox, 也未提供对 checkbox 的修改支持
      <SelectedTable />
    </Card>
  );
}

export default AntdTable;