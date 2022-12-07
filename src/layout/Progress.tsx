/**
 * @name: ProgressView
 * @desc: 自定义滚动条
 * 部分参考 https://github.com/dmetivier/gatsby-plugin-page-progress
 */

import React from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';

import useScrollPercent from '../hooks/useScrollPercent';

const ProgressWrapper = styled(Progress)`
	&.ant-progress {
		position: fixed;
		top: 0;
		left: 0;
		line-height: 1;
		font-size: 0;
	}

	.ant-progress-bg {
		height: 5px !important;
	}
`;

export default function ProgressView() {
	const { percent } = useScrollPercent();
	return percent ? (
		<ProgressWrapper
			percent={percent}
			showInfo={false}
			strokeColor={{
				'0%': '#fff',
				'100%': '#87d068',
			}}
		/>
	) : null;
}
