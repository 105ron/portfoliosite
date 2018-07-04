import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import styled, { injectGlobal } from "styled-components";
import Device from '../assets/mediaqueries';
import coyStyles from '../assets/prism-coy.css';


import icon48 from '../assets/favicon48.png';
import icon72 from '../assets/favicon72.png';
import icon96 from '../assets/favicon96.png';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import(coyStyles);
  :root {
    --linkblue: #368bc1;
    --greyline: #cbcbcb;
    --maxwidth: 820px;
    --headinggrey: color: rgba(74, 74, 74, 0.7);
    --wrapperwidth: 1220px;
    --navbargrey: #9d9d9d;
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
  margin: 0 auto;
  background-color: #fff;
`;

class TemplateWrapper extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet 
          htmlAttributes={ { lang : 'en' } }
          title='MadeByRhys'
          meta={[
            { name: 'Rhys', content: 'Website by Rhys' },
            { name: 'description', content: 'Blogs, projects - all made by Rhys'}
          ]}
          link={[
            { rel:' icon', type: 'image/png', href: `${icon48}`, sizes: '48x48' },
            { rel:' icon', type: 'image/png', href: `${icon72}`, sizes: '72x72' },
            { rel:' icon', type: 'image/png', href: `${icon96}`, sizes: '96x96' },
          ]}
        />
        <Navbar headerImage={this.props.data.headerImage}/>
        {this.props.children({...this.props, bannerImage: this.props.data.bannerImage })}
        <Footer />
      </Wrapper>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/logo/" }) {
      resolutions(width: 190) {
        ...GatsbyImageSharpResolutions
      }
    }
    bannerImage: imageSharp(id: { regex: "/harbour/" }) {
      sizes(maxHeight: 360 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`