import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 20em;
  background: url(${props => props.image});
  background-position: 50% 50%;
  background-size: cover;
  text-align: center`;

const Heading = styled.h2`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 4rem;
  color: #fff;
  font-family: arial, sans-serif;
  font-size: 2rem;
  letter-spacing: 0.0675em;
  font-weight: 100`;

const Tagline = styled.h3`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 7.5rem;
  color: #fff;
  font-family: arial, sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.0725em;
  font-weight: 100`;


  function BannerImage (props) {
    return(
      <Wrapper image={props.image}>
        <Heading>{props.heading}</Heading>
        <Tagline>{props.tagline}</Tagline>
      </Wrapper>
    )
  }
  
  export default BannerImage;