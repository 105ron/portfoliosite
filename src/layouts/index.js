import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar.js';
import styled from "styled-components";
import { injectGlobal } from 'styled-components';
import Device from '../layouts/mediaqueries';
import Pages from '../assets/pagelinks'

const pages = Pages.pages;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
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
  background-color: #fff`;

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
    <div>
      {children()}
    </div>
  </Wrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
