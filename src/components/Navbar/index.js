import React from 'react';
import styled from "styled-components";
import window from "global/window";
const MobileNav = require('./MobileNav');
const DesktopNav = require('./DesktopNav');

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
  height: 3px;
  `;



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
    return (
      <div>
        {this.state.width > 400
          ? <DesktopNav />
          : <MobileNav /> }
          {this.state.width}
          <BottomBorder>
            <Line color='#e74c4f'/>
            <Line color='#f0c93d'/>
            <Line color='#8ccfd9'/>
          </BottomBorder>
      </div>
    );
  }
};

module.exports = Navbar;