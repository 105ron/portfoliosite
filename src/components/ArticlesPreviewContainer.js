import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import ArticlePreviewCard from './ArticlePreviewCard';

const Container = styled.div`
  position: relative;
`;

const CardsContainer = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  @media ${Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 135px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.08) 0%,rgba(0,0,0,0) 100%);
  height: 6rem;
  width: 100%;
  z-index: 0;
`;

function ArticlesPreviewContainer(props) {
  const { article } = props;
  return (
    <Container>
      <Shadow />
      <CardsContainer>
        {article.map(edge => (
          <ArticlePreviewCard
            article={edge.node}
            key={edge.node.slug}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}

ArticlesPreviewContainer.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticlesPreviewContainer;

/* eslint import/no-extraneous-dependencies: "off" */
