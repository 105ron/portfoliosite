import React from "react";
import styled from "styled-components";
import Device from '../assets/mediaqueries';

const Card = styled.div`
  border-radius: 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  @media ${Device.tablet} {
    &:nth-child(9) {
      display: none;
    }
  }
  @media ${Device.tabletS} {
    &:nth-child(9) {
      display: block;
    }
  }
`;

const ProjectImage = styled.img`
  margin: 0 auto;
  padding-top: 0.6rem;
  width: 100%;
  height: auto;
`;

const ProjectName = styled.h5`
  margin: 0 0 0.6rem 0;
  color: rgba(74, 74, 74, 0.7);
  font-size: 1.2rem;
  font-weight: lighter;
  text-align: center;
`;

const ProjectByline = ProjectName.extend`
  font-size: 1rem;
`;

function ProjectsPreviewCard (props) {
  const { title, image, description, technologies } = props
  return (
    <Card>
      <ProjectImage src={ image } />
      <ProjectName> { title } </ProjectName>
      <ProjectByline> { description } </ProjectByline>
    </Card>
  )
}

export default ProjectsPreviewCard;