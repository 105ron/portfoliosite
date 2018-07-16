import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Img from "gatsby-image";
import Device from '../assets/mediaqueries';

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

function BannerImage(props) {
  const {
    image, alt, heading, tagline,
  } = props;
  return (
    <Wrapper>
      <Image
        sizes={image.sizes}
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

BannerImage.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default BannerImage;

/* eslint import/no-extraneous-dependencies: "off" */
