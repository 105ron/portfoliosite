import React from 'react'
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import BannerImage from '../components/BannerImage';
import ProjectsPreviewCard from '../components/ProjectsPreviewCard';

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  @media ${Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1``;

const SubHeading = styled.h2`
  margin-bottom: 1.5rem;
`;

function Projects (props) {
  return (
    <div>
      <BannerImage 
        heading='Portfolio'
        tagline= "Things I've made. ReactJS, Ruby on Rails, JavaScript, HTML5 and CSS3..."
        image={ props.data.bannerImage }
        alt='Sydney harbour banner image'
      />
      {/*<Title>Web Developer Portfolio</Title>
      <SubHeading>All aspects of Web Development: ReactJS, Ruby on Rails, JavaScript, HTML5 and CSS3.</SubHeading>*/}
      <Wrapper>
        <CardContainer>
          {props.data.allContentfulProjects.edges.map( edge =>
            <ProjectsPreviewCard
              key={ edge.node.repourl }
              title={ edge.node.title }
              repo={ edge.node.repourl }
              livesite={ edge.node.previewurl }
              image={ edge.node.image }
              description={ edge.node.description }
              technologies={ edge.node.technologies.split(',') }
            />
          )}
        </CardContainer>
      </Wrapper>
    </div>
  )
}

export default Projects

export const ProjectsQuery = graphql`
   query projectsQuery {
    bannerImage: imageSharp(id: { regex: "/harbour/" }) {
      sizes(maxHeight: 360 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allContentfulProjects (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [published], order: DESC },
    limit: 8
    ) {
        edges {
          node {
            previewurl
            repourl
            title
            description
            technologies
            image {
              sizes(maxWidth: 400) {
                ...GatsbyContentfulSizes
              }
            }
          }
        }
      }
  }`;