import React from 'react';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import rhysImage from '../assets/rhys.jpg';

const Card = styled.div`
  margin-top: 1.8rem;
  background-color: #e6e6e6;
  height:1200px`

const ProfilePhoto = styled.image`
  border: 4px solid black;
  height: 500rem;
  width: 500rem;`

function HelloCard () {
  return (
  <Card>
    <ProfilePhoto src={rhysImage} alt="Profile Photo" />
  </Card>
  )
}

export default HelloCard;