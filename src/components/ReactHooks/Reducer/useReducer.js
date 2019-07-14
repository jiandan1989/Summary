import React, { useState, useReducer } from 'react';
import { Button, Badge, Card } from 'antd';

const initialState = {
  count: 1,
};

// 此处需要定义 type, 用 switch 来做判断维护 reducer
function reducer(state, { type, payload = {} }) {
  return {
    ...state,
    ...payload,
  };
}

export default function UseReducer({ children }) {
  const [state, dispatchState] = useReducer(reducer, initialState);
  function addCount() {
    dispatchState({
      payload: { count: state.count + 1 },
    });
  }

  function decreaseCount() {
    dispatchState({
      payload: { count: state.count - 1 },
    });
  }

  return (
    <Card title="Hooks useState" bordered={false} bodyStyle={{ padding: '16px 0' }}>
      <Button type="primary" onClick={addCount}>
        Add
      </Button>
      &nbsp;
      <Button type="danger" onClick={decreaseCount}>
        Decrease
      </Button>
      <Badge count={state.count} style={{ backgroundColor: '#52c41a', marginLeft: 16 }} />
      {children}
    </Card>
  );
}
