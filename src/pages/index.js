import React from "react";
import styled from "styled-components";
import harbourImage from '../assets/harbour.jpg'

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  position: relative;
  height: 20em;
  background: url(${harbourImage});
  background-position: 50% 50%;
  background-size: cover;
  text-align: center`;

const Heading = styled.h2`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 2.5em;
  color: #fff;
  font-family: arial, sans-serif;
  font-size: 1.8em;
  letter-spacing: 0.0675em;
  font-weight: 100`;

const Tagline = styled.h3`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 7em;
  color: #fff;
  font-family: arial, sans-serif;
  font-size: 1.3em;
  letter-spacing: 0.0725em;
  font-weight: 100`;

class IndexPage extends React.Component {
  render () {
    return (
      <Wrapper>
        <Heading>Front End Developer</Heading>
        <Tagline>Improving the world wide web pixel by pixel...</Tagline>
      </Wrapper>
    )
  }
}

export default IndexPage; 