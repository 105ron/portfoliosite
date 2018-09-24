import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Img from "gatsby-image";

const Card = styled.div`
  border-radius: 3px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  }
`;

const Container = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 0.7rem;
  width: 100%;
  height: 100%;
`;

const ProjectImage = styled(Img)`
  margin: 0 auto;
  padding-top: 0.6rem;
  width: 100%;
  height: auto;
`;

const ProjectName = styled.p`
  margin: 0 7px 0.6rem 7px;
  padding: 0 0.5rem;
  color: var(--linkblue);
  font-size: 1.2rem;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

const ProjectByline = styled(ProjectName)`
  font-size: 1rem;
  color: rgba(74,74,74,0.7);;
  cursor: default;
  text-decoration: none;
  text-align: left;
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
  padding: 2px 7px 4px 7px;
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

class ProjectsPreviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer);
  }

  toggleClass = () => {
    const { active }= this.state;
    this.setState(prevState => ({ active: !prevState.active }));
    window.clearTimeout(this.timer);
    if (!active) { this.timeOut(); } // Timer to pull down overlay if the overlay is active
  }

  timeOut() {
    this.timer = window.setTimeout(this.toggleClass, 5000);
  }

  render() {
    const {
      title, image, description, technologies, repo, livesite,
    } = this.props;
    const { active } = this.state;
    return (
      <Card>
        <Container onClick={this.toggleClass}>
          <ProjectImage
            fluid={image.fluid}
            alt={`Screenshot of ${title}`}
          />
          <ProjectName>
            {title}
          </ProjectName>
          <ProjectByline>
            { description }
          </ProjectByline>
        </Container>
        <Overlay
          onClick={this.toggleClass}
          className={active ? 'active': null}
        >
          <LinksButton
            href={repo}
            target="_blank"
            rel="noopener"
          >
            View it on GitHub &#45;&gt;
          </LinksButton>
          <LinksButton
            href={livesite}
            target="_blank"
            rel="noopener"
          >
            See it on the Web &#45;&gt;
          </LinksButton>
          <TechList>
            {technologies.sort().map(tech => (
              <TechItem key={tech}>
                <TechSpan>
                  {tech}
                </TechSpan>
              </TechItem>
            ))}
          </TechList>
        </Overlay>
      </Card>
    );
  }
}

ProjectsPreviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  repo: PropTypes.string.isRequired,
  livesite: PropTypes.string.isRequired,
};

export default ProjectsPreviewCard;
