import React, { Component } from 'react';
import { Button, Card, Badge } from 'antd';

export default class ClassState extends Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
		};
	}

	addCount = () => {
		this.setState(prevState => ({
			count: prevState.count + 1,
		}));
	};

	decrease = () => {
		this.setState(prevState => ({
			count: prevState.count - 1,
		}));
	};

	render() {
		return (
			<Card title="Class State" bordered={false} bodyStyle={{ padding: '16px 0' }}>
				<Button type="primary" onClick={this.addCount}>
					Add
				</Button>
				&nbsp;
				<Button danger onClick={this.decrease}>
					Decrease
				</Button>
				<Badge count={this.state.count} style={{ marginLeft: 16 }} /> <br />
				{this.props.children}
			</Card>
		);
	}
}
