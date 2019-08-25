// https://www.gatsbyjs.org/tutorial/part-one/
// https://source.unsplash.com/random/1200x800

import React from 'react';
import { graphql } from 'gatsby';
import { BackTop } from 'antd';

import Banner from './components/Banner';
// import Footer from './components/Footer';
import Content8 from './components/Content8';
import Content9 from './components/Content9';
import Content10 from './components/Content10';
import Content11 from './components/Content11';
import Content12 from './components/Content12';

import {
  Banner30DataSource,
  Content80DataSource,
  Content90DataSource,
  Content100DataSource,
  Content110DataSource,
  Content120DataSource,
  // FooterData,
} from './components/data.source';
import './components/less/antMotionStyle.less';

import BlogLayout from '@/layout';
import SEO from '@/components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`, `ant-design`]} />
        <BackTop />
        <Banner id="Banner3_0" key="Banner3_0" dataSource={Banner30DataSource} />
        <Content8 id="Content8_0" key="Content8_0" dataSource={Content80DataSource} />
        <Content9 id="Content9_0" key="Content9_0" dataSource={Content90DataSource} />
        <Content10 id="Content10_0" key="Content10_0" dataSource={Content100DataSource} />
        <Content11 id="Content11_0" key="Content11_0" dataSource={Content110DataSource} />
        <Content12 id="Content12_0" key="Content12_0" dataSource={Content120DataSource} />
        {/* <Footer id="Footer2_0" key="Footer2_0" dataSource={FooterData} /> */}
      </BlogLayout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
