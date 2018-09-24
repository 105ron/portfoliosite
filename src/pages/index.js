import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import BannerImage from '../components/BannerImage/BannerImage';
import HelloCard from '../components/HelloCard/HelloCard';
import ArticlesPreviewContainer from '../components/ArticlesPreviewContainer/ArticlePreviewContainer';

function indexPage(props) {
  const {
    data: {
      allContentfulBlog: {
        edges: articles,
      },
    },
  } = props;
  return (
    <Layout>
      <BannerImage
        heading="Front End Web Developer."
        tagline="Improving the world wide web pixel by pixel..."
        alt="Sydney harbour banner image"
      />
      <HelloCard />
      <ArticlesPreviewContainer articles={articles} />
    </Layout>
  );
}

indexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulBlog: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default indexPage;

export const pageQuery = graphql`
   query pageQuery {
    
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
            fluid(maxWidth: 400) {
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;

/* eslint import/no-extraneous-dependencies: "off", no-undef: "off" */
