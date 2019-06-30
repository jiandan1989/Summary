export const getColumns = () => [{
  key: 'name',
  title: 'name',
  dataIndex: 'name',
}, {
  key: 'age',
  title: 'age',
  dataIndex: 'age',
}, {
  key: 'address',
  title: 'address',
  dataIndex: 'address',
}];

export const getRowSelection = ({ render, selectedRowKeys }) => ({
  render,
  selectedRowKeys,
  hideDefaultSelections: true,
  getCheckboxProps(record) {
    return {
      disabled: record.id && record.id % 3 === 0
    };
  },
  onChange(electedRowKeys, selectedRows) {
    console.log(electedRowKeys, selectedRows, '>>>>>>>>>>>>>>>>>');
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows, '>>>>>>>>>>>>>>>>>>>>');
  },
  onSelect(record, selected, selectedRows, nativeEvent) {
    console.log(record, selected, selectedRows, nativeEvent, '>>>>>>>>>>>>>>');
  }
})