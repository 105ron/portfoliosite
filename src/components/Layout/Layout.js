import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { injectGlobal } from 'styled-components';
import globalStyles from '../../assets/styles/globalStyles';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

/*eslint-disable */
injectGlobal`${globalStyles}`;
/* eslint-enable */

// 76.25rem wide for desktop
const Wrapper = styled.div`
  max-width: var(--wrapperwidth);
  margin: 0 auto;
  background-color: #fff;
`;

function layout({ children }) {
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
        <React.Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'A portfolio site, blog and projects of Rhys.' },
              { name: 'keywords', content: 'blog, javascript' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Wrapper>
            <Navbar />
            {children}
            <Footer />
          </Wrapper>
        </React.Fragment>
      )}
    />
  );
}

layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default layout;
