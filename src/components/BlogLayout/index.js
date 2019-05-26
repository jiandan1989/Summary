import React from 'react';
import { StaticQuery } from 'gatsby';

import Header from './Header';
// import LayoutFooter from './LayoutFooter';
import { LayoutWrapper, ContentWrapper } from '../wrapper';

function Layout({ children, location }) {
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
      render={data => (
        <LayoutWrapper>
          <Header location={location} siteTitle={data.site.siteMetadata.title} />
          <ContentWrapper>
            {children}
          </ContentWrapper>
          {/* <LayoutFooter /> */}
        </LayoutWrapper>
      )}
    />
  );
}

export default Layout