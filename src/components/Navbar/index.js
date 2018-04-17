import React from 'react';
import styled from "styled-components";
import Link from 'gatsby-link';

const Navbar = styled.nav`
  height: 150px;
  display: flex;
  justify-content: space-between;`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  font-family: arial;
  text-transform: uppercase;`;

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
        <Navbar>
          <List>Home</List>
          <List>About Me</List>
          <List>Blogs</List>
          <List>Projects</List>
          <List>Contact</List>
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