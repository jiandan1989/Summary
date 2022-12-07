import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import { LayoutWrapper, ContentWrapper } from '../components/wrapper';
import { ErrorBoundary } from '../components';

interface LayoutProps {
	children?: any;
	location?: any;
	title?: any;
}

const Layout: React.FC<LayoutProps> = props => {
	const { children } = props;

	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={data => {
				return (
					<LayoutWrapper>
						<Header siteTitle={data.site.siteMetadata.title} />
						<ContentWrapper>
							<ErrorBoundary>{children}</ErrorBoundary>
						</ContentWrapper>
					</LayoutWrapper>
				);
			}}
		/>
	);
};

export default Layout;
