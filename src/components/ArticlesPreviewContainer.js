import React from "react";
import styled from "styled-components";
import Device from '../assets/mediaqueries';

const Container = styled.div`

`;

const CardsContainer = styled.div`
  max-width: 820px;
  margin: 1.5rem auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  @media ${Device.tablet} {
    grid-template-columns: 1fr;
    margin: 1.5rem;
  };
`;

const Card = styled.div`
  height:200px;
  background-color: var(--linkblue);
  `

function ArticlesPreviewContainer () {
  return (
    <Container>
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </Container>
  )
}

export default ArticlesPreviewContainer;