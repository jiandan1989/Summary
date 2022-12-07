import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { List, Tag } from 'antd';

import { formatDate } from '../../utils/date';

interface BlogListProps {
	posts?: any[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
	return (
		<List
			rowKey="id"
			itemLayout="vertical"
			dataSource={posts}
			pagination={{
				pageSize: 5,
				showQuickJumper: true,
				showTotal: total => `共 ${total}篇`,
			}}
			renderItem={({ node }) => {
				const title = node.frontmatter.title || node.fields.slug;
				
				return (
					<List.Item key={node.fields.slug}>
						<List.Item.Meta
							title={<Link to={node.fields.slug}>{title}</Link>}
							description={
								<Fragment>
									{/* 此处需要一张缩略图 @todo&nbsp; */}
									<Tag color="magenta">Javascript</Tag>
									<Tag color="#f47d31">TypeScript</Tag>
									<Tag color="purple">css</Tag>
									<Tag color="#f47d31">html</Tag>
								</Fragment>
							}
						/>
						<p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
						<br />
						最后修改: <small>{formatDate(node.frontmatter.date)}</small>
					</List.Item>
				);
			}}
		/>
	);
};

export default BlogList;
