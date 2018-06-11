import React from "react";
import styled from "styled-components";
import BannerImage from '../components/BannerImage';
import HelloCard from '../components/HelloCard';
import ArticlesPreviewContainer from '../components/ArticlesPreviewContainer';
import harbourImage from '../assets/harbour.jpg';

function IndexPage () {
  return (
    <div>
      <BannerImage 
        heading='Front End Developer.'
        tagline='Improving the world wide web pixel by pixel...'
        image={harbourImage}
      />
      <HelloCard />
      <ArticlesPreviewContainer />
    </div>
  )
}

export default IndexPage; 
