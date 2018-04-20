import React from 'react';
import styled from "styled-components";
import Link from 'gatsby-link';
import Device from '../../layouts/mediaqueries';
import logo from '../../images/logo.png'

const Title = styled.h1`
  text-indent:-9999px;
  overflow:hidden;
  margin: 0;
  font-size: 0;`

const TitleImage = styled.div`
  height: 5em;
  background: url(${logo});
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;`

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 730px;
  margin: auto;
  @media ${Device.tablet} {
    flex-direction: column;
    text-align: center;
  }`;

const List = styled(Link)`
  margin: 0;
  padding: 0;
  font-family: arial;
  text-transform: uppercase;
  text-decoration: none;
  color: #9d9d9d`;

const BottomBorder = styled.ul`
  display: flex;
  height: 3px;
  padding: 0;
  margin: 0;
  `;

const Line = styled.li.attrs({
  color: props => props.color || 'pink'
})`
  background-color: ${props => props.color};
  list-style: none;
  flex-grow: 1;
  height: 3px;`;


class DesktopNav extends React.Component {
  render () {
    return (
      <div>
        <header>
          <Title>MadeByRhysss</Title>
          <TitleImage />
        </header>
        <Navbar>
          <List to="/">Home</List>
          <List to="/about/">About Me</List>
          <List to="/blogs/">Blogs</List>
          <List to="/projects/">Projects</List>
          <List to="/contact/">Contact</List>
        </Navbar>
        <BottomBorder>
          <Line color='#e74c4f'/>
          <Line color='#f0c93d'/>
          <Line color='#8ccfd9'/>
        </BottomBorder>
      </div>
    );
  }
};

module.exports = DesktopNav;