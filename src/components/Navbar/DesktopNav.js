import React from 'react';
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: pink;
  height: 300px;`;

class DesktopNav extends React.Component {
  render () {
    return <span>Desktop Navbar</span>;
  }
};

module.exports = DesktopNav;