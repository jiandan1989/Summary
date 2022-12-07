/**
 * @desc: 输入关键词权重问题
 * @todo
 * 1. tooltip 输入实时预览
 * 2. 防御编程措施
 */
import React, { useState, useEffect } from 'react';

import { Input, Popover } from 'antd';
import { isFunction } from '../../utils/checkType';
import { formatTwo } from './helper';

// function onBlurBox(e) {
//   const { value } = e.target
//   if (isFunction(props.onBlur)) {
//     props.onBlur(value)
//   }
// }
const KeywordWeight: React.FC<any> = props => {
	const defaultValue = props.value || props.defaultValue || '';
	const [inputVal, setInputVal] = useState(defaultValue);
	useEffect(() => {
		setInputVal(defaultValue);
	}, [defaultValue]);

	function onChangeBox(e: any) {
		const { value } = e.target;
		setInputVal(value);
		if (isFunction(props.onChange)) {
			props.onChange(value);
		}
	}

	const content = inputVal ? formatTwo(inputVal, '&') : props.placeholder;
	const title = inputVal ? inputVal.replace(/&|\+|(\S(?=\d+?))|\d+?|(|)/g, '') : props.placeholder;

	return (
		<Popover title={title} content={content} trigger={['focus']} placement="topLeft">
			<Input {...props} value={inputVal} onChange={onChangeBox} />
		</Popover>
	);
};

export default KeywordWeight;
