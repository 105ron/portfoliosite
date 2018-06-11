import React from "react";
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import Link from 'gatsby-link';
import ArticlePreviewCard from './ArticlePreviewCard';

const Container = styled.div`
  position: relative;
`;

const CardsContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 1.5rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  @media ${Device.tablet} {
    grid-template-columns: 1fr;
    margin: 1.5rem;
  };
`;

const Shadow = styled.div`
  position: absolute;
  top: 135px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.08) 0%,rgba(0,0,0,0) 100%);
  height: 6rem;
  width: 100%;
  z-index: 0;
`;

function ArticlesPreviewContainer (props) {
  return (
    <Container>
      <Shadow />
      <CardsContainer>
      {props.articles.map( (article, index) => (
          <ArticlePreviewCard article={article.node} key={article.node.slug} />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default ArticlesPreviewContainer;