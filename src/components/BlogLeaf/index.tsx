import React from 'react';
import { Link } from 'gatsby';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { formatDate } from '../../utils/date';
import { BlogLeafWrapper } from '../wrapper';

interface BlogLeafProps {
	previous: any;
	next: any;
	modifyDate: any;
}

const BlogLeaf: React.FC<BlogLeafProps> = ({ previous, next, modifyDate }) => {
	return (
		<BlogLeafWrapper>
			{previous && (
				<Link to={previous.fields.slug} rel="prev">
					<ArrowLeftOutlined /> {previous.frontmatter.title}
				</Link>
			)}
			&nbsp;
			{modifyDate && <span>最近一次更新: {formatDate(modifyDate)}</span>}
			{next && (
				<Link to={next.fields.slug} rel="next">
					{next.frontmatter.title}
					<ArrowRightOutlined />
				</Link>
			)}
		</BlogLeafWrapper>
	);
};

export default BlogLeaf;
