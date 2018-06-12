import React from 'react';
import styled from "styled-components";
import SocialIcons from '../assets/SocialIcons';

const {Email, Facebook, GitHub, Linkedin, Skype, Twitter, Whatsapp} = SocialIcons;

function Footer() {
return (
  <div>
    <Email width="30px" height="30px" />
    <GitHub width="30px" height="30px" />
    <Twitter width="30px" height="30px" />
    <Facebook width="30px" height="30px" />
    <Linkedin width="30px" height="30px" />
    <Whatsapp width="30px" height="30px" />
    <Skype width="30px" height="30px" />
  </div>
  )
}

export default Footer;