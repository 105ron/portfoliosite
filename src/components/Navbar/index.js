import React from 'react'
import styled from "styled-components";
import window from "global/window";

const NavWrapper = styled.nav`
  background: pink;
  height: 300px;`;

class Navbar extends React.Component {
  constructor () {
    super();
    this.state = {
      width: this.updateDimensions
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  updateDimensions () {
    var width = window.innerWidth;
    this.setState(function () {
      return {
        width: width
      }
    });
  }
  componentWillMount () {
    this.updateDimensions();
  }
  
  componentDidMount () {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render () {
    return <span>{this.state.width}</span>;
  }
};

module.exports = Navbar;