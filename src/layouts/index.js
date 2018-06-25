import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import styled, { injectGlobal } from "styled-components";
import Device from '../assets/mediaqueries';
import PrismStyles from '../assets/prism-okaidia.css';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import(PrismStyles);
  :root {
    --linkblue: #368bc1;
    --greyline: #cbcbcb;
    --maxwidth: 820px;
    --headinggrey: color: rgba(74, 74, 74, 0.7);
    --wrapperwidth: 1220px;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 18px;
    margin: 0;
    background-color: #dedede;
    min-width: 360px;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    color: rgba(74, 74, 74, 0.7);
    font-size: 1rem;
    line-height: 30px;
  }

  h1 {
    font-family: arial;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 1.2rem 0 0.6rem 0;
    color: var(--headinggrey);
  }

  h2 {
    font-family: arial;
    font-size: 1.1rem;
    text-align: center;
    margin: 0 0 0.6rem 0;
    color: rgba(74,74,74,0.75);
  }
      
  @media ${Device.tablet} {
    body {
      font-size: 16px;
    }
  }
`;

//76.25rem wide for desktop
const Wrapper = styled.div`
  max-width: var(--wrapperwidth);
  margin: 0.8rem auto;
  background-color: #fff;
  @media ${Device.pageWidth} {
    margin: 0 auto;
  }
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title='MadeByRhys'
      meta={[
        { name: 'Rhys', content: 'Website by Rhys' },
      ]}
    />
    <Navbar />
    {children()}
    <Footer />
  </Wrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
