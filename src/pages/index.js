import React from "react";
import styled from "styled-components";
import BannerImage from '../components/BannerImage.js'
import harbourImage from '../assets/harbour.jpg'


class IndexPage extends React.Component {
  render () {
    return (
      <BannerImage 
        heading='Front End Developer.'
        tagline='Improving the world wide web pixel by pixel...'
        image={harbourImage}
        />
    )
  }
}

export default IndexPage; 