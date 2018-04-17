import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import styled from "styled-components";


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
