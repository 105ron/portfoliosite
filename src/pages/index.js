import React from "react";
import styled from "styled-components";
import BannerImage from '../components/BannerImage';
import HelloCard from '../components/HelloCard';
import ArticlesPreviewContainer from '../components/ArticlesPreviewContainer';
import harbourImage from '../assets/harbour.jpg';

const Box = styled.div`
  width: 200px;
  margin: 50px;
  padding: 50px;`

function IndexPage (props) {
  return (
    <div>
      <BannerImage 
        heading='Front End Developer.'
        tagline='Improving the world wide web pixel by pixel...'
        image={harbourImage}
      />
      <HelloCard />
      <ArticlesPreviewContainer articles={props.data.allContentfulBlog.edges} />
      <Box />
    </div>
  )
}

export default IndexPage; 

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [published], order: DESC },
    limit: 4
    ) {
        edges {
          node {
            title
            slug
            content {
              childMarkdownRemark {
                excerpt
              }
            }
            bannerimage {
              responsiveResolution (width:400, height: 250) {
                src
              }
            }
          }
        }
    }
   }`;