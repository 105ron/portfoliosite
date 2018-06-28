import React from "react";
import BannerImage from '../components/BannerImage';
import HelloCard from '../components/HelloCard';
import ArticlesPreviewContainer from '../components/ArticlesPreviewContainer';

function IndexPage (props) {
  return (
    <div>
      <BannerImage 
        heading='Front End Developer.'
        tagline='Improving the world wide web pixel by pixel...'
        image={props.data.bannerImage}
        alt="Sydney harbour banner image"
      />
      <HelloCard />
      <ArticlesPreviewContainer articles={props.data.allContentfulBlog.edges} />
    </div>
  )
}

export default IndexPage; 

export const pageQuery = graphql`
   query pageQuery {
    bannerImage: imageSharp(id: { regex: "/harbour/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [published], order: DESC },
    limit: 4
    ) 
    {
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
            sizes(maxWidth: 400) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }`;