import React from 'react';
import SEO from '../components/seo';
import BlogLayout from '../layout';
import styled from 'styled-components';

const ImageWrapper = styled.section`
	img {
		display: block;
		width: 100%;
		margin: 0 auto;
	}
`;

const imgs = [
	{
		key: 'panda',
		url:
			'https://images.unsplash.com/photo-1526716173434-a1b560f2065d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
	},
	{
		key: 'greatwall',
		url: 'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
	},
	{
		key: 'gril',
		url: 'https://images.unsplash.com/photo-1524548209323-6fb4a0d4a4a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
	},
	{
		key: 'agirl',
		url:
			'https://images.unsplash.com/photo-1542841791-c3cc44abdbbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
	},
	{
		key: 'aagirl',
		url:
			'https://images.unsplash.com/photo-1495298599282-d8920eb5009b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
	},
];

const About = () => {
	return (
		<BlogLayout>
			<SEO title="About" />
			{/* 积极向上的打工仔
      <h4>此处需要一个特牛叉的动画, 或使用纯css, 或使用 粒子动画, 或使用 ThreeJS(未使用过) @TODO</h4> */}
			<ImageWrapper>
				{imgs.map(({ key, url }) => (
					<img src={url} key={key} alt={key} />
				))}
			</ImageWrapper>
		</BlogLayout>
	);
};

export default About;
