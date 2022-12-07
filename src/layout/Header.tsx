import React from 'react';
import { Affix } from 'antd';
import Nav from './Nav';

import ProgressView from './Progress';

const Header = () => {
	return (
		<Affix>
			<ProgressView />
			<Nav />
		</Affix>
	);
};

export default Header;
