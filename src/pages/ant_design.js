/**
 * @desc: 动态输入表单获取值
 */

import React, { Fragment } from 'react'
import SEO from '../components/seo'
import { Form, Card, Input, PageHeader } from 'antd'
import DynamicInput from '../components/DynamicInput';
import KeywordWeight from '../components/KeywordWeight';

import { NORMAL_LAYOUT } from '../contants';

const { Item: FormItem } = Form;

function FormatInput({ form }) {
  const { getFieldDecorator } = form;
  return (
    <Fragment>
      <SEO title='动态输入表单' />
      <PageHeader
        title='返回上一级'
        onBack={() => null}
      />
      <Card>
        <Form>
          <FormItem label="关键词权重" {...NORMAL_LAYOUT}>
            <a name="keyword" />
            {getFieldDecorator('keywords', {
              initialValue: 'Good=10&(Good+Study), Day&Day=1&Up, Leave=3&Us&(Get+Out)',
              // getValueFromEvent() {
              //   console.log(arguments, '>>>>>>>>>>>>>');
              //   return arguments;
              // }
            })(
              <KeywordWeight placeholder="请输入关键词" />
            )}
          </FormItem>
          <FormItem label="动态输入表单" {...NORMAL_LAYOUT}>
            <a name="dynamic_input" />
            <DynamicInput />
          </FormItem>
          <FormItem label="Cron表达式" {...NORMAL_LAYOUT}>
            <a name="cron" />
            <DynamicInput />
          </FormItem>
        </Form>
      </Card>
    </Fragment>
  )
}

export default Form.create()(FormatInput)
