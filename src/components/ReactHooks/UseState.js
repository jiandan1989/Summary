import React, { useState, Fragment } from 'react'

import { Button } from 'antd';

export default function UseStateDemo() {
  const [count, setCount] = useState(0)
  function addCount() {
    setCount(count + 1)
  }

  return (
    <Fragment>
      当前count: {count}&nbsp;
      <Button type="primary" onClick={addCount}>Add</Button>
    </Fragment>
  )
}