import React from 'react';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import rhysImage from '../assets/rhys.jpg';
import Link from 'gatsby-link';
import Pages from '../assets/pagelinks'

const pages = Pages.pageObject;

const Container = styled.div`
  margin-top: 1.8rem;
  background-color: #e6e6e6;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 17rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 64%;
  min-width: 40.8rem;
  @media ${Device.tablet} {
    flex-flow: row wrap;
    justify-content: space-between;
    width: auto;
    min-width: auto;
    max-width: 28.2rem;
    height: auto;
    padding 0.8rem;
  }
`;

const PhotoCircle = styled.div`
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

const ProfilePhoto = styled.img`
  width: 15.8rem;
  height: auto;
  position: relative;
  top: -1.5rem;
  @media ${Device.tablet} {
    width: 10.6rem;
    top: -1rem;
  };
`;

const IntroText = styled.div`
  width: 50%;
  margin: 0 0 0.4rem 0;
  @media ${Device.tablet} {
    width: auto;
    min-width: 20%;
    max-width: 14rem;
    flex-grow: 1;
    margin: 0 0 0.4rem 0.8rem;
  };
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
  width: 50%;
  @media ${Device.tablet} {
    min-width: auto;
    flex-grow: 1;
  }
`;

const AboutText = styled.p`
  font-family: arial, sans-serif;
  font-size: 1rem;
  margin: 0 0 0.4rem 0;
`;

const AboutLink = styled(Link)`
  color: var(--linkblue);
  font-family: arial, sans-serif;
  font-size: 1rem;
  display: block;
  text-align: right;
  font-style: italic;
  @media ${Device.tablet} {
    text-align: center;
  }
`;

function HelloCard () {
  return (
  <Container>
    <Card>
      <PhotoCircle>
        <ProfilePhoto src={rhysImage} alt="Profile Photo" />
      </PhotoCircle>
      <IntroText>
        <HelloHeading>G'Day!</HelloHeading>
        <HelloSubHeading>I'm Rhys...</HelloSubHeading>
      </IntroText>
      <MoreInformation>
        <AboutText>I like to code and make the web a prettier place for everybody.</AboutText>
        <AboutLink to={pages.about.route}>Read more about me.</AboutLink>
      </MoreInformation>
    </Card>
  </Container>
  )
}

export default HelloCard;