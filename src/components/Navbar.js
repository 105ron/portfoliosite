import React from 'react';
import styled from "styled-components";
import Link from 'gatsby-link';
import Device from '../assets/mediaqueries';
import logo from '../assets/logo.png'
import Pages from '../assets/pagelinks'

const pages = Pages.pages;

const Title = styled.h1`
  text-indent:-9999px;
  overflow:hidden;
  margin: 0;
  font-size: 0;
`;

const TitleImage = styled.div`
  height: 4.5rem;
  margin: 0.6rem 1rem;
  background: url(${logo});
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  @media ${Device.tablet} {
  height: 3.5rem;
  }
;`

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: var(--maxwidth);
  margin: auto;
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


function DesktopNav () {
  return (
    <div style={{marginTop: '0.6rem'}}>
      <header>
        <Title>MadeByRhysss</Title>
        <TitleImage />
      </header>
      <Navbar>
        {/* Nav bar links*/}
        {pages.map((page, index) => (
          <List key={index} to={page.route}>{page.name}</List>
        ) )}
      </Navbar>
      <BottomBorder>
        {lineColors.map( (color, index) => (
          <Line color={color} key={index} />
        ))}
      </BottomBorder>
    </div>
  );
};

export default DesktopNav;