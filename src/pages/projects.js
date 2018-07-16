import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import BannerImage from '../components/BannerImage';
import ProjectsPreviewCard from '../components/ProjectsPreviewCard';

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
  const { bannerImage, data } = props;
  return (
    <div>
      <BannerImage
        heading="Portfolio"
        tagline="Things I've made. ReactJS, Ruby on Rails, JavaScript, HTML5 and CSS3..."
        image={bannerImage}
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
    </div>
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
              sizes(maxWidth: 400) {
                ...GatsbyContentfulSizes
              }
            }
          }
        }
      }
  }`;

/* eslint import/no-extraneous-dependencies: "off", no-undef: "off" */
