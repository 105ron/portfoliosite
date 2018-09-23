import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import BannerImage from '../components/BannerImage/BannerImage';
import BlogPostPreviewCard from '../components/BlogPostPreviewCard/BlogPostPreviewCard';

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 1.8rem auto;
  padding: 0 20px;
`;

function blogPosts(props) {
  const { data: { allContentfulBlog: { edges: articles } } } = props;
  return (
    <Layout>
      <BannerImage
        heading="Blog Posts"
        tagline="Most recent posts covering the latest news in Web Development..."
        alt="Sydney harbour banner image"
      />
      <Wrapper>
        {articles.map((article) => {
          const {
            title, tags, slug, published, bannerimage: articleImage, synopsis,
          } = article.node;
          return (
            <BlogPostPreviewCard
              key={slug}
              articleImage={articleImage}
              published={published}
              slug={slug}
              synopsis={synopsis}
              tags={tags}
              title={title}
            />
          );
        })}
      </Wrapper>
    </Layout>
  );
}

blogPosts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default blogPosts;

export const pageQuery = graphql`
query postsQuery {
 allContentfulBlog (
 filter: {
   node_locale: {eq: "en-US"},
   published: {regex: "/^201/"}
 },
 sort:{ fields: [published], order: DESC },
 limit: 100
 ) {
    edges {
      node {
        title
        slug
        published
        tags
        synopsis {
          internal {
            content
          }
        }
        bannerimage {
          fluid(maxWidth: 720) {
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
}`;

/* eslint import/no-extraneous-dependencies: "off", no-undef: "off" */
