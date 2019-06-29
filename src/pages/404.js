/**
 * @name: NotFoundPage
 * @desc: 404
 */

import React from 'react';

import BlogLayout from '@/layout'
import SEO from '@/components/seo';

const NotFoundPage = () => (
  <BlogLayout>
    <SEO title="404: Not found" />
    <img src="https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2785&q=80" />
  </BlogLayout>
)

export default NotFoundPage
