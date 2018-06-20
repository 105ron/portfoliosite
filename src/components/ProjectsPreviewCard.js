import React from "react";
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import Link from 'gatsby-link';

const Card = styled.div`
  border-radius: 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  &:hover {
    cursor: pointer;
  }
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

const Container = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  background: rgba(34, 34, 34, 0.52);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: 0.2s;
  transform: translateY(100%);
  ${Card}:hover & {
    transform: translateY(0);
  }
  &.active {
    transform: translateY(0);
  }
`;

const ProjectImage = styled.img`
  margin: 0 auto;
  padding-top: 0.6rem;
  width: 100%;
  height: auto;
`;

const ProjectName = styled.p`
  margin: 0 0 0.6rem 0;
  color: var(--linkblue);
  font-size: 1.2rem;
  font-weight: lighter;
  text-align: center;
`;

const ProjectByline = ProjectName.extend`
  font-size: 1rem;
  color: rgba(74, 74, 74, 0.7);
`;

const LinksButton = styled.a`
`;

const TechList = styled.ul`
`;

const TechItem = styled.li`
`;

class ProjectsPreviewCard extends React.Component {
  constructor () {
    super ();
    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
        active: false,
    };
  }

  timeOut () {
    this.timer = window.setTimeout(this.toggleClass, 5000);
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    window.clearTimeout(this.timer);
    if (!currentState) { this.timeOut() };
  };


  render () { 
    const { title, image, description, technologies, repo, livesite } = this.props
    return (
      <Card>
        <Container onClick={this.toggleClass} >
          <ProjectImage src={ image } />
          <ProjectName> { title } </ProjectName>
          <ProjectByline> { description } </ProjectByline>
        </Container>
        <Overlay 
          onClick={this.toggleClass}
          className={this.state.active ? 'active': null } >
          <LinksButton href={ repo }>View it on GitHub</LinksButton>
          <LinksButton href={ livesite }>See it on the Web</LinksButton>
          <TechList>
            { technologies.map( ( tech, index ) => 
            <TechItem key={index}> {tech} </TechItem>) }
          </TechList>
        </Overlay>
      </Card>
    )
  }
}

export default ProjectsPreviewCard;