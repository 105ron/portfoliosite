import React from 'react';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import rhysImage from '../assets/rhys.jpg';

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
  min-width: 46.8rem;
  background-color: yellow;
  @media ${Device.tablet} {
    flex-flow: row wrap;
    flex-grow:1;
    justify-content: space-evenly;
    width: 100%;
    min-width: 100%;
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
  background-color:pink;
  height: 150px;
  width:50%;
  @media ${Device.tablet} {
    width: auto;
    min-width: 20%;
    flex-grow: 1;
  };`;

const MoreInformation = styled.div`
  background-color:blue;
  height:50px;
  width: 50%;
  @media ${Device.tablet} {
    min-width:100%;
  }`

function HelloCard () {
  return (
  <Container>
    <Card>
      <PhotoCircle>
        <ProfilePhoto src={rhysImage} alt="Profile Photo" />
      </PhotoCircle>
      <IntroText />
      <MoreInformation />
    </Card>
  </Container>
  )
}

export default HelloCard;