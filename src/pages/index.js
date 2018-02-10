import React from "react";
import styled from "styled-components";

//import Container from "../components/container";
//<h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
// Use Title and Wrapper like any other React component – except they're styled!
const IndexPage = () => (
  <Wrapper>
    <Title>
      Hello World, this is my first styled component!
    </Title>
  </Wrapper>
);

export default IndexPage; 