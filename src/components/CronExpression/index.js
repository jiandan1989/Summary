/**
 * @desc: Cron 表达式
 * @name: Cron
 * @todo: 多选
 */

import React, { useState, Fragment } from 'react'
import moment from 'moment'

import { TimePicker, Select, Input, Alert, Form, Col, Row } from 'antd'

import { FlexWrapper } from '@/components/wrapper'
import {
  CRON_UNIT_TYPES,
  CRON_MONTH_DAYS,
  CRON_WEEK_DAYS,
  NORMAL_LAYOUT,
  SMALL_LAYOUT,
} from '@/contants'

const { TextArea } = Input

const daysType = {
  month: CRON_MONTH_DAYS,
  week: CRON_WEEK_DAYS,
}

const getDays = (type = 'month') =>
  Array(daysType[type])
    .fill(1)
    .map((k, i) => ({ key: i + 1 }))
const { Option } = Select
const { Item: FormItem } = Form

function CronExpression({ form }) {
  const [previewData, setPreviewData] = useState('')
  const { getFieldDecorator, getFieldValue, validateFields } = form
  function getValue() {
    return new Promise((resolve, reject) => {
      validateFields((err, values) => {
        if (err) return reject(err)
        const { time, unit, day } = values
        const data = {
          day,
          unit,
          min: time.minute(),
          hour: time.hour(),
          sec: time.second(),
        }
        return resolve(data)
      })
    })
  }

  async function formatCron() {
    const { day, unit, min, hour, sec } = await getValue()
    let code = ''
    if (unit === 'month') {
      code = `${sec} ${min} ${hour} ${day} * ?`
    }
    if (unit === 'week') {
      code = `${sec} ${min} ${hour} 0 0 ${day}`
    }
    if (unit === 'day') {
      code = `${sec} ${min} ${hour} * * ?`
    }
    setPreviewData(code)
  }

  return (
    <Fragment>
      <Alert
        showIcon
        message='@todo: 显示数据有延迟, 获取到的值是上一次的值'
        type='warning'
      />
      <Form>
        <FormItem label='Cron 表达式' {...NORMAL_LAYOUT}>
          <Row gutter={48}>
            <Col span={8}>
              <FormItem label='每' {...SMALL_LAYOUT}>
                {getFieldDecorator('unit')(
                  <Select onChange={formatCron}>
                    {Object.keys(CRON_UNIT_TYPES).map((key) => (
                      <Option key={key}>{CRON_UNIT_TYPES[key]}</Option>
                    ))}
                  </Select>,
                )}
              </FormItem>
            </Col>
            {getFieldValue('unit') !== 'day' && (
              <Col span={8}>
                <FlexWrapper>
                  <FormItem style={{ flex: 1 }} label='第' {...SMALL_LAYOUT}>
                    {getFieldDecorator('day', {
                      initialValue: '',
                    })(
                      <Select onChange={formatCron}>
                        {getDays(getFieldValue('unit')).map((item) => (
                          <Option key={item.key}>{item.key}</Option>
                        ))}
                      </Select>,
                    )}
                  </FormItem>
                  天
                </FlexWrapper>
              </Col>
            )}
            <Col span={8}>
              <FormItem label='时分秒' {...NORMAL_LAYOUT}>
                {getFieldDecorator('time', {
                  initialValue: moment(),
                })(<TimePicker onChange={formatCron} />)}
              </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label='预览' {...NORMAL_LAYOUT}>
          <TextArea value={previewData} autosize={{ minRows: 5, maxRows: 6 }} />
        </FormItem>
      </Form>
    </Fragment>
  )
}

export default Form.create()(CronExpression)
