import React from 'react'
import styled from "styled-components";
import BannerImage from '../components/BannerImage';

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px;
  height: 400px;
`;
//remove height when content complete

function About(props) {
  return (
    <div>
      <BannerImage 
        heading='About'
        tagline='More about me...'
        image={ props.bannerImage }
        alt='Sydney harbour banner image'
      />
      <Wrapper>
        <p>Please check back later, this page is still under construction</p>
      </Wrapper>
    </div>
  )
}


export default About
