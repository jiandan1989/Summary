import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

function Bio() {
	return (
		<StaticQuery
			query={bioQuery}
			render={data => {
				const { author } = data.site.siteMetadata;
				return <span>{author}</span>;
			}}
		/>
	);
}

const bioQuery = graphql`
	query BioQuery {
		site {
			siteMetadata {
				author
			}
		}
	}
`;

export default Bio;
