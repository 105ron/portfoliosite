import React from 'react';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import Link from 'gatsby-link';
import Pages from '../assets/pagelinks';
import Img from "gatsby-image";

const Container = styled.div`
  margin: 1.8rem 0;
  background-color: #e6e6e6;
`;

const Card = styled.div`
  display: grid;
  grid-template: 2 / 2;
  grid-template-areas: "photo intro" "photo moreinformation";
  grid-column-gap: 2rem;
  place-items: center center;
  margin: 0 auto;
  padding 1.5rem 0;
  width: 64%;
  min-width: 40.8rem;
  @media ${Device.tablet} {
    grid-template-areas: "photo intro" "moreinformation moreinformation";
    min-width: auto;
    width: 100%;
    grid-column-gap: 1rem;
  }
`;

const PhotoCircle = styled.div`
  grid-area: photo;
  width: 13.8rem;
  height: 13.8rem;
  border-radius: 50%;
  border: 0.75rem solid #fff;
  overflow: hidden;
  @media ${Device.tablet} {
    margin: 0 0 0.4rem 0;
    width: 9rem;
    height: 9rem;
  };
`;

const ProfilePhoto = styled(Img)`
  width: 12.3rem;
  height: auto;
  position: relative;
  object-fit: contain;
  @media ${Device.tablet} {
    margin-left: -0.2rem;
    width: 8rem;
  };
`;

const IntroText = styled.div`
  grid-area: intro;
  justify-self: start;
  @media ${Device.tablet} {
    padding: 0 1rem;
`;

const HelloHeading = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-size: 3.8rem;
  font-weight: bold;
  margin: 0;
  @media ${Device.tablet} {
    font-size: 2.8rem;
  }
`;

const HelloSubHeading = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-size: 2.8rem;
  margin: 0;
  @media ${Device.tablet} {
    font-size: 1.8rem;
  }
`;

const MoreInformation = styled.div`
  grid-area: moreinformation;
  @media ${Device.tablet} {
    padding: 0 1rem;
  }
`;

const SeparatorLine = styled.div`
  display: none;
  height: 1px;
  width: 66%;
  margin: 0.45rem auto;
  background-color: var(--greyline);
  @media ${Device.tablet} {
    display: block;
  }`

const AboutText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: (--headinggrey);
  margin: 0 0 0.4rem 0;
`;

const AboutLink = styled(Link)`
  color: var(--linkblue);
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  display: block;
  text-align: right;
  font-style: italic;
  @media ${Device.tablet} {
    text-align: center;
  }
`;

function HelloCard (props) {
  const pages = Pages.pageObject;
  return (
  <Container>
    <Card>
      <PhotoCircle>
        <ProfilePhoto 
          sizes={ props.rhysImage.sizes } 
          alt="Profile Photo" 
        />
      </PhotoCircle>
      <IntroText>
        <HelloHeading>G'Day!</HelloHeading>
        <HelloSubHeading>I'm Rhys...</HelloSubHeading>
      </IntroText>
      <MoreInformation>
        <SeparatorLine />
        <AboutText>I like to code and make the web a prettier place for everybody.</AboutText>
        <AboutLink to={ pages.about.route }>Read more about me.</AboutLink>
      </MoreInformation>
    </Card>
  </Container>
  );
}

export default HelloCard;