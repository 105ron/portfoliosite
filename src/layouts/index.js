import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import styled, { injectGlobal } from "styled-components";
import Device from '../assets/mediaqueries';
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
    --headinggrey: color: rgba(74, 74, 74, 0.7);
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
    font-size: 18px;
    margin: 0;
    background-color: #dedede;
    min-width: 360px;
  }

  p {
    color: rgba(74, 74, 74, 0.7);
    font-size: 1rem;
    line-height: 30px;
  }
      
  @media ${Device.tablet} {
    body {
      font-size: 16px;
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
