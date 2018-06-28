import React from 'react';
import styled from "styled-components";
import Link from 'gatsby-link';
import Device from '../assets/mediaqueries';
import Pages from '../assets/pagelinks'
import Img from "gatsby-image";

const NavWrapper = styled.div`
  margin-top: '0.6rem';
`;

const Header = styled.header`
  & > div {
    text-align: center;
  }
`;

const Title = styled.h1`
  text-indent:-9999px;
  overflow:hidden;
  margin: 0;
  font-size: 0;
`;

const TitleImage = styled(Img)`
  margin: 0.6rem auto;
  @media ${Device.tablet} {
    height: 3.5rem;
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: var(--maxwidth);
  margin: auto;
  padding: 0 20px;
  @media ${Device.tablet} {
    flex-direction: column;
    text-align: center;
  }
`;

const List = styled(Link)`
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-family: arial;
  text-transform: uppercase;
  text-decoration: none;
  color: #9d9d9d
`;

const BottomBorder = styled.ul`
  display: flex;
  height: 3px;
  padding: 0;
  margin: 0;
`;

const lineColors = ['#e74c4f', '#f0c93d', '#8ccfd9']

const Line = styled.li.attrs({
      color: props => props.color || 'black'
    })`
  background-color: ${props => props.color};
  list-style: none;
  flex-grow: 1;
  height: 3px;
`;


function Navbar (props) {
  const pages = Pages.pages;
  return (
    <NavWrapper>
      <Header>
        <Title>MadeByRhysss</Title>
        <TitleImage
          resolutions={ props.headerImage.resolutions }
          alt="rhysbrooker.com logo"
         />
      </Header>
      <NavbarContainer>
        {/* Nav bar links*/}
        {pages.map((page, index) => (
          <List key={index} to={page.route}>{page.name}</List>
        ) )}
      </NavbarContainer>
      <BottomBorder>
        {lineColors.map( (color, index) => (
          <Line color={color} key={index} />
        ))}
      </BottomBorder>
    </NavWrapper>
  );
};

export default Navbar;