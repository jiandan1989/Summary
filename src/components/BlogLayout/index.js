import React from 'react';
import { StaticQuery } from 'gatsby';
import styled from 'styled-components';

import LayoutHeader from './LayoutHeader';
// import LayoutFooter from './LayoutFooter';

const ContentWrapper = styled.main`
  margin: 0 auto;
  max-width: 960px;
  height: calc(100% - 48px);
  padding: 24px;
`;

const Wrapper = styled.div`
  height: 100vh;
`;

const Layout = ({ children, location }) => (
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
      <Wrapper>
        <LayoutHeader location={location} siteTitle={data.site.siteMetadata.title} />
        <ContentWrapper>
          {children}
        </ContentWrapper>
        {/* <LayoutFooter /> */}
      </Wrapper>
    )}
  />
)

export default Layout