import React from 'react';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import rhysImage from '../assets/rhys.jpg'
const Card = styled.div`
  height: 35px;
  margin-top: 1.8rem;
  background-color: #e6e6e6;`

const ProfilePhoto = styled.image`
  border: 4px solid black;
  height: 500rem;
  width: 500rem;`

function HelloCard () {
  return (
  <Card>
    <ProfilePhoto src={rhysImage} alt="Profile Photo" height="500" width="500" />
  </Card>
  )
}

export default HelloCard;