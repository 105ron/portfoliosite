import React from "react";
import styled from "styled-components";
import Link from 'gatsby-link';

const Card = styled.div`
  z-index: 1;
  text-align: center;
`;

const ArticleLink = styled(Link)`
  text-decoration: none;
`;

const ArticleImage = styled.img`
  margin: 0 auto;
`;

const ArticleTitle = styled.h5`
  margin: 0.6rem 0;
  color: #939393;
  font-family: arial;
  font-size: 1.5rem;
  text-align: center;
`;

const Excerpt = styled.p`
  color: #939393;
  font-family: arial;
  font-size: 1rem;
  text-align: justify;
`;

function ArticlePreviewCard (props) {
  return ( 
    <Card>
      <ArticleLink to={props.article.slug}>
        <ArticleImage src={props.article.bannerimage.responsiveResolution.src} />
        <ArticleTitle>{props.article.title}</ArticleTitle>
      </ArticleLink>
      <Excerpt>{props.article.content.childMarkdownRemark.excerpt}</Excerpt>

    </Card>
  );
}

export default ArticlePreviewCard;