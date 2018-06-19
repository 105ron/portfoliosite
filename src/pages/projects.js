import React from 'react'
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import Link from 'gatsby-link'

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px;
  background-color: pink;
`

const Title = styled.h1``;

const SubHeading = styled.h2``;

function Projects (props) {
  return (
    <Wrapper>
      <Title>web developer portfolio</Title>
      <SubHeading>From Web Components, ReactJS, Ruby on Rails, JavaScript, HTML5 and CSS3. Check out my latest web software development portfolio projects.</SubHeading>
      <ul>
      {props.data.allContentfulProjects.edges[0].node.technologies.split(',').map ( tech =>
        <li>{tech}</li>
      )}
      </ul>
      <Link to="/">Go back to the homepage</Link>
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
              responsiveResolution (width:400, height: 290) {
                src
              }
            }
          }
        }
      }
  }`;