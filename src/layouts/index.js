import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar.js';
import styled from "styled-components";
import { injectGlobal } from 'styled-components';
import Device from '../layouts/mediaqueries';

injectGlobal`
  body {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
    margin: 0;
  }
      
  @media ${Device.tablet} {
    body {
      font-size: 20px;
    }
  }`

const Wrapper = styled.div`
  max-width: 1220px;
  margin: auto`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title='Rhys hard coded title'
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
