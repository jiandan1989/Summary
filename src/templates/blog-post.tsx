import React from 'react';
import { FloatButton, Button, Empty, Card, Space } from 'antd';
import rehypeReact from 'rehype-react';
import { ArrowUpOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { graphql, navigate } from 'gatsby';

import SEO from '../components/seo';
import BlogLayout from '../layout';
import AllComponents from '../components';
import { getSiderMenu } from '../utils/tree';
import TreeMenu from '../components/TreeMenu';
import BlogLeaf from '../components/BlogLeaf';
import { conversionComponent } from '../utils/conversion';
import { formatDate } from '../utils/date';

const packagekeys = Object.keys(AllComponents);
const components = conversionComponent(AllComponents, packagekeys);

const renderAst = new rehypeReact({
	createElement: React.createElement,
	components,
}).Compiler;

function backPrevPage() {
	navigate('/blogs/');
}

function BlogPostTemplate({ data, pageContext, location }) {
	// pageContext: 包含上一页, 下一页的信息 以及当前页是否是 page
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;
	const menuData = getSiderMenu(post);
	const isEmpty = renderAst(post.htmlAst) && renderAst(post.htmlAst).props && !renderAst(post.htmlAst).props.children;

	return (
		<BlogLayout location={location} title={siteTitle}>
			<SEO title={post.frontmatter.title} description={post.excerpt} />
			<Card
				size="small"
				bordered={false}
				style={{ height: '100%', maxWidth: 1200, margin: '0 auto' }}
				title={
					<Space>
						<Button icon={<ArrowLeftOutlined />} onClick={backPrevPage} type="link" />
						{post.frontmatter.title}
					</Space>
				}
				// subTitle={formatDate(post.frontmatter.date)}
			>
				{/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
				{isEmpty ? <Empty description="暂时还未添加正文内容!" /> : renderAst(post.htmlAst)}
				<BlogLeaf modifyDate={post.frontmatter.modifyDate} {...pageContext} />
			</Card>
			{/* 添加更新日志: 时间 + 更新内容, 添加隐藏功能 */}
			<TreeMenu data={menuData} />
			<FloatButton.BackTop>
				<Button type="primary" icon={<ArrowUpOutlined />} />
			</FloatButton.BackTop>
		</BlogLayout>
	);
}

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			htmlAst
			excerpt(pruneLength: 160)
			frontmatter {
				title
				date(formatString: "YYYY MMMM DD")
				modifyDate(formatString: "YYYY MMMM DD")
			}
		}
	}
`;
