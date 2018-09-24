import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Device from '../assets/styles/mediaQueries';
import Layout from '../components/Layout/Layout';
import BannerImage from '../components/BannerImage/BannerImage';
import ProjectsPreviewCard from '../components/ProjectsPreviewCard/ProjectsPreviewCard';

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 1.8rem auto;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  @media ${Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

function Projects(props) {
  const { data } = props;
  return (
    <Layout>
      <BannerImage
        heading="Portfolio"
        tagline="Things I've made. ReactJS, Ruby on Rails, JavaScript, HTML5 and CSS3..."
        alt="Sydney harbour banner image"
      />
      <Wrapper>
        <CardContainer>
          {data.allContentfulProjects.edges.map(edge => (
            <ProjectsPreviewCard
              key={edge.node.repourl}
              title={edge.node.title}
              repo={edge.node.repourl}
              livesite={edge.node.previewurl}
              image={edge.node.image}
              description={edge.node.description}
              technologies={edge.node.technologies.split(',')}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Layout>
  );
}


export default Projects;

export const ProjectsQuery = graphql`
   query projectsQuery {
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
  }`;

/* eslint import/no-extraneous-dependencies: "off", no-undef: "off" */
