/**
 * @name: FilterPage
 * @desc: filter 滤镜
 */
import React, { useState, Fragment } from 'react';
import { Card, Select, Slider } from 'antd';

const FILTERS = {
  blur: {
    max: 10,
    text: '模糊',
    unit: 'px',
  },
  invert: {
    max: 1,
    text: '反转',
  },
  brightness: {
    max: 1,
    text: 'brightness',
  },
  'hue-rotate': {
    max: 360,
    text: 'hue-rotate',
    unit: 'deg',
  },
  opacity: {
    max: 1,
    text: '透明',
  },
  saturate: {
    max: 100,
    unit: '%',
    text: 'saturate',
  },
};

const { Option } = Select;

function getMaxNum(type) {
  if (!type) return 1;
  if (FILTERS[type]) return FILTERS[type].max || 1;
  return 1;
}

function getStyle(type, range) {
  return FILTERS[type] && FILTERS[type].unit ? `${type}(${range}${FILTERS[type].unit})` : `${type}(${range})`;
}

export default function FilterPage() {
  const [type, setType] = useState('');
  const [range, setRange] = useState(8);

  function changeFilterType(val) {
    setType(val);
  }

  return (
    <Card
      title={
        <Fragment>
          <Select style={{ width: 500 }} value={type} onChange={changeFilterType}>
            {Object.keys(FILTERS).map((key) => (
              <Option key={key} value={key}>
                {FILTERS[key].text}
              </Option>
            ))}
          </Select>
          <Slider
            onChange={(val) => {
              setRange(val);
            }}
            value={range}
            step={0.1}
            max={getMaxNum(type)}
          />
        </Fragment>
      }>
      <section>
        <br />
        沧海笑 滔滔两岸潮 <br />
        浮沉随浪记今朝 <br />
        苍天笑 纷纷世上潮 <br />
        谁负谁胜出天知晓 <br />
        江山笑 烟雨遥
        <br /> 涛浪淘尽 红尘俗世知多少 <br />
        清风笑 竟若寂寥 <br />
        豪情还剩了一襟晚照 <br />
        苍生笑 不再寂寥 豪情仍在痴痴笑笑
        <br />
        <img
          width={200}
          style={{ filter: getStyle(type, range) }}
          src="https://images.unsplash.com/photo-1495298599282-d8920eb5009b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        />
      </section>
    </Card>
  );
}
