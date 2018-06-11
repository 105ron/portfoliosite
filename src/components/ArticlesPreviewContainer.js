import React from "react";
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import Link from 'gatsby-link';

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

function ArticlesPreviewContainer (props) {
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

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [published], order: DESC }
    ) {
        edges {
          node {
            title
            slug
          
            
          }
        }
    }
   }
`