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

const ProjectImage = styled.img`
  margin: 0 auto;
  padding-top: 0.6rem;
  width: 100%;
  height: auto;
`;

const ProjectName = styled.p`
  margin: 0 7px 0.6rem 7px;
  color: var(--linkblue);
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
`;

const ProjectByline = ProjectName.extend`
  font-size: 1rem;
  color: rgba(74, 74, 74, 0.7);
  cursor: default;
`;

const Overlay = styled.div`
  background: rgba(34, 34, 34, 0.72);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.2s;
  transform: translateY(100%);
  &.active {
    transform: translateY(0);
  }
`;

const LinksButton = styled.a`
  padding: 0.5rem;
  background: rgba(34, 34, 34, 0.45);
  text-shadow: 2px 2px #000;
  text-decoration: none;
  color: #efefef;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #fff;
  border-radius: 3px;
`;

const TechList = styled.ul`
  list-style-type:none;
  margin: 0 1rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechItem = styled.li`
  padding: 3px 5px;
  margin: 0.5rem;
  background-color: #3e3e3e;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #222;
  border-radius: 3px;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.35);
`;

const TechSpan = styled.span`
  color: #cecece;
  text-transform: uppercase;
  font-size: 0.9rem;

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
          <LinksButton href={ repo }> View it on GitHub -></LinksButton>
          <LinksButton href={ livesite }> See it on the Web -></LinksButton>
          <TechList>
            { technologies.map( ( tech, index ) => 
              <TechItem key={index}>
                <TechSpan>{tech}</TechSpan> 
              </TechItem>
            ) }
          </TechList>
        </Overlay>
      </Card>
    )
  }
}

export default ProjectsPreviewCard;