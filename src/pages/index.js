import React from "react";
import PropTypes from 'prop-types';
import BannerImage from '../components/BannerImage';
import HelloCard from '../components/HelloCard';
import ArticlesPreviewContainer from '../components/ArticlesPreviewContainer';

function IndexPage(props) {
  const { bannerImage, data } = props;
  return (
    <div>
      <BannerImage
        heading="Front End Developer."
        tagline="Improving the world wide web pixel by pixel..."
        image={bannerImage}
        alt="Sydney harbour banner image"
      />
      <HelloCard rhysImage={data.rhysImage} />
      <ArticlesPreviewContainer article={data.allContentfulBlog.edges} />
    </div>
  );
}

IndexPage.propTypes = {
  bannerImage: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
   query pageQuery {
    rhysImage: imageSharp(id: { regex: "/rhysimage/" }) {
      sizes(maxWidth: 220, maxHeight: 220) {
        ...GatsbyImageSharpSizes
      }
    }
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"},
      published: {regex: "/^201/"}
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
            description
            sizes(maxWidth: 400) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;

/* eslint import/no-extraneous-dependencies: "off", no-undef: "off" */
