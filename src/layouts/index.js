import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import globalCSS from '../styles/globalStyles';
import manifest from '../assets/manifest';

injectGlobal`${globalCSS}`;

// 76.25rem wide for desktop
const Wrapper = styled.div`
  max-width: var(--wrapperwidth);
  margin: 0 auto;
  background-color: #fff;
`;

function TemplateWrapper(props) {
  const { icons } = manifest;
  const { data } = props;
  return (
    <Wrapper>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="MadeByRhys"
        meta={[
          { name: 'Rhys', content: 'Website by Rhys' },
          { name: 'description', content: 'Blogs, projects - all made by Rhys' },
        ]}
        link={icons}
      />
      <Navbar headerImage={data.headerImage} />
      {props.children({ ...props, bannerImage: data.bannerImage })}
      <Footer />
    </Wrapper>
  );
}


TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/logo/" }) {
      resolutions(width: 190) {
        ...GatsbyImageSharpResolutions
      }
    }
    bannerImage: imageSharp(id: { regex: "/harbour/" }) {
      sizes(maxHeight: 360 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

/* eslint import/no-extraneous-dependencies: "off", no-unused-expressions: "off", no-undef: "off", react/destructuring-assignment: "off" */
