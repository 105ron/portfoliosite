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
    width: 100%;
    min-width: auto;
    max-width: 30rem;
    height: auto;
    padding 0.8rem;
  }
`

const PhotoCircle = styled.div`
  width: 13.8rem;
  height: 13.8rem;
  border-radius: 50%;
  border: 0.75rem solid #fff;
  overflow: hidden;
  @media ${Device.tablet} {
    width: 9rem;
    height: 9rem;
  };
  `

const ProfilePhoto = styled.img`
  width: 15.8rem; /* you can use % */
  height: auto;
  position: relative;
  top: -1.5rem;
  @media ${Device.tablet} {
    width: 10.6rem;
    top: -1rem;
  };
`;

const IntroText = styled.div`
  background-color: pink;
  height: 150px;
  width: 50%;
  @media ${Device.tablet} {
    width: auto;
    min-width: 20%;
    max-width: 14rem;
    flex-grow: 1;
  };`;

const HelloHeading = styled.h3`

`;

const HelloSubHeading = styled.h4`

`;

const MoreInformation = styled.p`
  background-color: white;
  height: 50px;
  width: 50%;
  @media ${Device.tablet} {
    min-width: auto;
    flex-grow: 1;
  }`

const AboutLink = styled(Link)`
  color: blue;`

function HelloCard () {
  return (
  <Container>
    <Card>
      <PhotoCircle>
        <ProfilePhoto src={rhysImage} alt="Profile Photo" />
      </PhotoCircle>
      <IntroText>
        <HelloHeading>G'Day</HelloHeading>
        <HelloSubHeading>I'm Rhys</HelloSubHeading>
      </IntroText>
      <MoreInformation>I like to code and make the web a prettier place for everybody.<AboutLink to={pages.about.route}>Here is a link.</AboutLink></MoreInformation>
    </Card>
  </Container>
  )
}

export default HelloCard;