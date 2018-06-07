import React from "react";
import BannerImage from '../components/BannerImage'
import HelloCard from '../components/HelloCard'
import harbourImage from '../assets/harbour.jpg'


function IndexPage () {
  return (
    <div>
      <BannerImage 
        heading='Front End Developer.'
        tagline='Improving the world wide web pixel by pixel...'
        image={harbourImage}
      />
      <HelloCard />
    </div>
  )
}

export default IndexPage; 