import React from "react";
import styled from "styled-components";
import Device from '../assets/mediaqueries';

const Card = styled.div`
  border-radius: 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
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
  &.active {
    transform: translateY(0) !important;
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

const LinksButton = styled.button`
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

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };


  render () { 
    const { title, image, description, technologies } = this.props
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
          <LinksButton>View it on GitHub</LinksButton>
          <LinksButton>See it on the Web</LinksButton>
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