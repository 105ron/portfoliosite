import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import styled from "styled-components";
import { injectGlobal } from 'styled-components';
import Device from '../layouts/mediaqueries';
import Pages from '../assets/pagelinks';
import PrismStyles from '../assets/prism-okaidia.css';

const pages = Pages.pages; //site pages and links

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import(PrismStyles);
  :root {
    --linkblue: #368bc1;
    --greyline: #cbcbcb;
    --maxwidth: 820px;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
    margin: 0;
    background-color: #dedede;
    min-width: 360px;
  }
      
  @media ${Device.tablet} {
    body {
      font-size: 20px;
    }
  }`

//76.25rem wide for desktop
const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0.3rem auto 0 auto;
  background-color: #fff;
  @media ${Device.tablet} {
    margin: 0 auto;
  }
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title='MadeByRhys'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
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
