/**
 * @desc: 生成目录树
 * @todo
 * 1. 滚动选中
 */
import React, { useState, useEffect } from 'react';
import { Affix } from 'antd';

import './index.less';

export function JumpLink({ link, title, isActive, setCurrentKey }) {
	return (
		<li key={link} title={title}>
			<a
				className={isActive ? 'current' : ''}
				href={`#${title}`}
				onClick={() => {
					setCurrentKey(link);
				}}
			>
				{title}
			</a>
		</li>
	);
}

export default function TreeMenu({ data }) {
	const [currentKey, setCurrentKey] = useState('');
	useEffect(() => {
		const currentItem = data[0] || { currentKey };
		setCurrentKey(currentKey || currentItem.key);
	}, [data]);
	return (
		<Affix className="toc-affix" offsetTop={120}>
			<ul id="demo-toc" className="toc">
				{data.map(item => (
					<JumpLink
						isActive={item.key === currentKey}
						setCurrentKey={setCurrentKey}
						title={item.title}
						link={item.key}
						key={item.key}
					/>
				))}
			</ul>
		</Affix>
	);
}
