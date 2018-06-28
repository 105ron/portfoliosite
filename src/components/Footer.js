import React from 'react';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import SocialIcons from '../assets/SocialIcons';

const {Email, Facebook, GitHub, Linkedin, Skype, Twitter, Whatsapp} = SocialIcons;

const iconsAndLinks = [
  {icon: Email,
  link: `mailto:rhysbrooker01@gmail.com?subject=Email%20from%20RhysBrooker.com`},
  {icon: GitHub,
  link: `https://github.com/105ron`},
  {icon: Linkedin,
    link: `https://www.linkedin.com/in/rhysbrooker/`},
  {icon: Twitter,
  link: `https://twitter.com/rhysonrails`}
]

const Wrapper = styled.nav`
  max-width: var(--maxwidth);
  border-top: 1.2px solid var(--greyline);
  margin: 1rem auto 0 auto;
  @media ${Device.pageWidth} {
    padding-bottom: 0.5rem;
  }
`;

const SocialIconsList = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  padding: 0.8rem 0;
  width: 66%;
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.li`
  padding: 0;
`;

const Copyright = styled.p`
  color: var(--greyline);
  margin: 0;
  font-family: arial;
  font-size: 0.7rem;
  text-align: center;
  padding-bottom: 0.4rem;
`;

function Footer() {
return (
  <Wrapper>
    <SocialIconsList>
      {iconsAndLinks.map( site => (
        <Icon key={site.link} >
          <a href={site.link}>
            {site.icon({height: '30px', width: '30px'})}
          </a>
        </Icon>) 
        ) }
    </SocialIconsList>
    <Copyright>Copyright © All Rights Reserved 2018.</Copyright>
  </Wrapper>
  )
}

export default Footer;