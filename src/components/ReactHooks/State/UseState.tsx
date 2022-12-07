import React, { useState } from 'react';
import { Button, Badge, Card } from 'antd';

const UseStateDemo = ({ children }) => {
	const [count, setCount] = useState(1);
	function addCount() {
		setCount(count + 1);
	}

	function decreaseCount() {
		setCount(count - 1);
	}

	return (
		<Card title="Hooks useState" bordered={false} bodyStyle={{ padding: '16px 0' }}>
			<Button type="primary" onClick={addCount}>
				Add
			</Button>
			&nbsp;
			<Button danger onClick={decreaseCount}>
				Decrease
			</Button>
			<Badge count={count} style={{ backgroundColor: '#52c41a', marginLeft: 16 }} />
			{children}
		</Card>
	);
};

export default UseStateDemo;
