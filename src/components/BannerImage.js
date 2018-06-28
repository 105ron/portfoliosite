import React from 'react';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import Img from "gatsby-image";

const Wrapper = styled.div`
  position: relative;
  height: 20em;
  text-align: center
`;

const Image = styled(Img)`
  height: 20em;
  z-index: 1;
  object-fit: cover;
`

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
    top: 11.5rem;
}`;


  function BannerImage (props) {
    return(
      <Wrapper>
        <Image sizes={props.image.sizes} />
        <Heading>{props.heading}</Heading>
        <Tagline>{props.tagline}</Tagline>
      </Wrapper>
    )
  }
  
  export default BannerImage;