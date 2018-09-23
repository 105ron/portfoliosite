import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Device from '../../assets/styles/mediaQueries';

const Wrapper = styled.div`
  position: relative;
  height: 20em;
  text-align: center
`;

const Image = styled(Img)`
  height: 20em;
  z-index: 1;
  object-fit: cover;
`;

const Heading = styled.h2`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0 1rem;
  top: 4.8rem;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 0.0675em;
  font-weight: 100;
  @media ${Device.tablet} {
    top: 4rem;
  }
`;

const Tagline = styled.h3`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0 1rem;
  top: 9.5rem;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.0725em;
  font-weight: 100;
  @media ${Device.tablet} {
    top: 10rem;
  }
`;

function bannerImage(props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteBannerImageQuery {
          bannerImage: file(relativePath: { eq: "images/harbour.jpg" }) {
            childImageSharp {
              fluid(maxHeight: 360) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => {
        const { bannerImage: { childImageSharp: { fluid: harbourImage } } } = data;
        const { alt, heading, tagline } = props;
        return (
          <Wrapper>
            <Image
              fluid={harbourImage}
              alt={alt}
            />
            <Heading>
              {heading}
            </Heading>
            <Tagline>
              {tagline}
            </Tagline>
          </Wrapper>
        );
      }
    }
    />
  );
}


bannerImage.propTypes = {
  alt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default bannerImage;

/* eslint import/no-extraneous-dependencies: "off" */
