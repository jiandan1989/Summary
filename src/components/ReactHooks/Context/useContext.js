import React, { Fragment, createContext, useState, useContext } from 'react';
import { Badge, Slider, Form } from 'antd';

const { Item: FormItem } = Form;

const CountContext = createContext();

function UseContext(props) {
  const [count, setCount] = useState(1);

  function changeSliderValue(value) {
    setCount(value);
  }

  return (
    <CountContext.Provider value={count}>
      <Slider min={1} onChange={changeSliderValue} value={count} />
      <Form layout="inline">
        <ChildA />
      </Form>
      {props.children}
    </CountContext.Provider>
  );
}

function ChildA() {
  const count = useContext(CountContext);
  return (
    <Fragment>
      <FormItem label="ChildA">
        <Badge count={count} style={{ backgroundColor: '#52c41a' }} />
      </FormItem>
      <FormItem label="ChildB">
        <ChildB />
      </FormItem>
    </Fragment>
  );
}

function ChildB() {
  const count = useContext(CountContext);
  return <Badge count={count} />;
}
export default UseContext;
