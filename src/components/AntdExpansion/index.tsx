import React from 'react';
import { Collapse, Tooltip } from 'antd';
import { CodeOutlined } from '@ant-design/icons';

import './index.less';

const { Panel: CollapsePanel } = Collapse;

export function CodePanel({ children, title = '', ...rest }) {
	return (
		<Collapse
			bordered={false}
			className="expansion"
			expandIconPosition="left"
			defaultActiveKey={[]}
			expandIcon={() => <CodeOutlined />}
		>
			<CollapsePanel header={<Tooltip title="Show Code">Code</Tooltip>} key="code" {...rest}>
				{children}
			</CollapsePanel>
		</Collapse>
	);
}
