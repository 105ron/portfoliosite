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

function layout(props) {
  const { children, description } = props;
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
      render={(data) => {
        const { site: { siteMetadata: { title } } } = data;
        return (
          <React.Fragment>
            <Helmet
              title={title}
              meta={[
                { name: 'description', content: description },
                { name: 'keywords', content: 'blog, javascript' },
                { name: 'google-site-verification', content: 'bXTx2cFVp0QugBZ_l4JVaGc48PnZlzsLsSpXY0pU5E8' },
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
        );
      }}
    />
  );
}

layout.defaultProps = {
  description: 'A portfolio site, blog and projects of Rhys.',
};

layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default layout;
