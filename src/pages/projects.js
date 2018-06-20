import React from 'react'
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import Link from 'gatsby-link';
import ProjectsPreviewCard from '../components/ProjectsPreviewCard';

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  @media ${Device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${Device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1``;

const SubHeading = styled.h2`
  margin-bottom: 1.5rem;
`;

function Projects (props) {
  return (
    <Wrapper>
      <Title>Web Developer Portfolio</Title>
      <SubHeading>From Web Components, ReactJS, Ruby on Rails, JavaScript, HTML5 and CSS3. Check out my latest web development portfolio projects, click the project for more information.</SubHeading>
      <CardContainer>
        <ProjectsPreviewCard
          key='1'
          title={props.data.allContentfulProjects.edges[0].node.title }
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
        <ProjectsPreviewCard 
        key='2'
          title={props.data.allContentfulProjects.edges[0].node.title }
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
        <ProjectsPreviewCard 
        key='3'
          title={props.data.allContentfulProjects.edges[0].node.title }
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
        <ProjectsPreviewCard  
        key='4'
          title={props.data.allContentfulProjects.edges[0].node.title }
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
        <ProjectsPreviewCard  
        key='10'
          title={props.data.allContentfulProjects.edges[0].node.title }
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
        <ProjectsPreviewCard  
        key='5'
          title={props.data.allContentfulProjects.edges[0].node.title }
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
        <ProjectsPreviewCard  
        key='6'
          title={props.data.allContentfulProjects.edges[0].node.title }
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
        <ProjectsPreviewCard  
        key='8'
          title='second last'
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
        <ProjectsPreviewCard  
        key='9'
          title='last'
          repo={props.data.allContentfulProjects.edges[0].node.repourl}
          livesite={props.data.allContentfulProjects.edges[0].node.previewurl}
          image={props.data.allContentfulProjects.edges[0].node.image.responsiveResolution.src }
          description={props.data.allContentfulProjects.edges[0].node.description }
          technologies={props.data.allContentfulProjects.edges[0].node.technologies.split(',') }
        />
      </CardContainer>
    </Wrapper>
  )
}

export default Projects

export const ProjectsQuery = graphql`
   query projectsQuery {
    allContentfulProjects (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [published], order: DESC },
    limit: 4
    ) {
        edges {
          node {
            previewurl
            repourl
            title
            description
            technologies
            image {
              responsiveResolution (width:340, height: 260) {
                src
              }
            }
          }
        }
      }
  }`;