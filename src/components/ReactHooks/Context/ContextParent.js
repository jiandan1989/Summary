import React, { Component, Fragment } from 'react'
import { Badge, Slider, Form, Card } from 'antd'

const { Item: FormItem } = Form

const CountContext = React.createContext()

class ContextParent extends Component {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
  }

  changeSliderValue = (value) => {
    this.setState({ count: value })
  }

  render() {
    const { count } = this.state;
    return (
      <Card title='class 版本'>
        <CountContext.Provider value={count}>
          <Slider min={1} onChange={this.changeSliderValue} value={count} />
          <Form layout='inline'>
            <ChildA />
          </Form>
          {this.props.children}
        </CountContext.Provider>
      </Card>
    )
  }
}

class ChildA extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {(count) => {
          return (
            <Fragment>
              <FormItem label='ChildA'>
                <Badge count={count} style={{ backgroundColor: '#52c41a' }} />
              </FormItem>
              <FormItem label='ChildB'>
                <ChildB />
              </FormItem>
            </Fragment>
          )
        }}
      </CountContext.Consumer>
    )
  }
}

class ChildB extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {(count) => <Badge count={count} />}
      </CountContext.Consumer>
    )
  }
}
export default ContextParent
