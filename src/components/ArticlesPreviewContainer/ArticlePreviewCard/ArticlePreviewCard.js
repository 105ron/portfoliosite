import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Link from 'gatsby-link';
import Img from "gatsby-image";

const Card = styled.div`
  z-index: 1;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  padding: 1.2rem;
`;

const ArticleLink = styled(Link)`
  text-decoration: none;
`;

const ArticleImage = styled(Img)`
  margin: 0 auto;
  width: 100%;
  height: auto;
`;

const ArticleTitle = styled.h5`
  margin: 0.6rem 0;
  color: #939393;
  font-family: arial;
  font-size: 1.5rem;
  text-align: center;
`;

const Excerpt = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
  text-align: left;
`;

function articlePreviewCard(props) {
  const {
    article: {
      slug, bannerimage, title, content,
    },
  } = props;
  return (
    <Card>
      <ArticleLink to={slug}>
        <ArticleImage
          fluid={bannerimage.fluid}
          alt={bannerimage.description}
        />
        <ArticleTitle>
          {title}
        </ArticleTitle>
      </ArticleLink>
      <Excerpt>
        { content.childMarkdownRemark.excerpt }
      </Excerpt>
    </Card>
  );
}

articlePreviewCard.propTypes = {
  article: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    bannerimage: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  }).isRequired,
};

export default articlePreviewCard;

/* eslint import/no-extraneous-dependencies: "off" */
