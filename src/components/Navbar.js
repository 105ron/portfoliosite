import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Link from 'gatsby-link';
import Img from "gatsby-image";
import Device from '../assets/mediaqueries';
import { pages } from '../assets/appData';

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
  margin: 0.6rem 0;
  @media ${Device.tablet} {
    height: 3.5rem;
  }
  @media ${Device.pageWidth} {
    margin: 1.2rem 0 0.8rem 0;
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
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--navbargrey);
`;

const BottomBorder = styled.ul`
  display: flex;
  height: 3px;
  padding: 0;
  margin: 0;
`;

const lineColors = ['#e74c4f', '#f0c93d', '#8ccfd9'];

const Line = styled.li.attrs({
  color: props => props.color || 'black',
})`
  background-color: ${props => props.color};
  list-style: none;
  flex-grow: 1;
  height: 3px;
`;


function Navbar(props) {
  const { headerImage, page } = props;
  const bold = { fontWeight: 'bold' };
  return (
    <NavWrapper>
      <Header>
        <Title>
          MadeByRhys
        </Title>
        <TitleImage
          resolutions={headerImage.resolutions}
          alt="rhysbrooker.com logo"
        />
      </Header>
      <NavbarContainer>
        {pages.map(pg => (
          <List
            key={pg.route}
            to={pg.route}
            style={pg.route === page ? bold : null}
          >
            {pg.name}
          </List>
        ))}
      </NavbarContainer>
      <BottomBorder>
        {lineColors.map((color, index) => (
          <Line color={color} key={index} />
        ))}
      </BottomBorder>
    </NavWrapper>
  );
}

Navbar.propTypes = {
  headerImage: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

export default Navbar;

/* eslint import/no-extraneous-dependencies: "off",  react/destructuring-assignment: "off", react/no-array-index-key: "off" */
