import React from 'react';
import PropTypes from 'prop-types';
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

function projects(props) {
  const {
    data: {
      allContentfulProjects: {
        edges: contentfulProjects,
      },
    },
  } = props;
  return (
    <Layout description="Web development projects made by Rhys. ReactJS, Ruby on Rails, JavaScript, HTML5 and CSS3...">
      <BannerImage
        heading="Portfolio"
        tagline="Things I've made. ReactJS, Ruby on Rails, JavaScript, HTML5 and CSS3..."
        alt="Sydney harbour banner image"
      />
      <Wrapper>
        <CardContainer>
          {contentfulProjects.map((project) => {
            const {
              node: {
                repourl, title, previewurl, image, description, technologies,
              },
            } = project;
            return (
              <ProjectsPreviewCard
                key={repourl}
                title={title}
                repo={repourl}
                livesite={previewurl}
                image={image}
                description={description}
                technologies={technologies.split(',')}
              />
            );
          })}
        </CardContainer>
      </Wrapper>
    </Layout>
  );
}

projects.propTypes = {
  data: PropTypes.shape({
    allContentfulProjects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default projects;

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
