import React, { useState, Fragment } from 'react';
import { Card, Select, Slider } from 'antd';
// import type { Property } from 'csstype';

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

const FilterPage = () => {
	const [type, setType] = useState('');
	const [range, setRange] = useState(8);

	return (
		<Card>
			<Select style={{ width: 300 }} value={type} onChange={setType}>
				{Object.keys(FILTERS).map(key => (
					<Option key={key} value={key}>
						{FILTERS[key].text}
					</Option>
				))}
			</Select>
			<Slider
				step={0.1}
				value={range}
				max={getMaxNum(type)}
				onChange={val => {
					setRange(val);
				}}
			/>
			<img
				width={500}
				style={{ filter: getStyle(type, range) }}
				src="https://images.unsplash.com/photo-1495298599282-d8920eb5009b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
			/>
		</Card>
	);
};

export default FilterPage;
