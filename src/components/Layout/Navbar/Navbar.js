import React from 'react';
// import PropTypes from 'prop-types'; TODO reinstate proptypes for StaticQuery
import {
  StaticQuery, graphql, Link,
} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Device from '../../../assets/styles/mediaQueries';
import { pages } from '../../../assets/helpers/appHelpers';

const NavWrapper = styled.div`
  margin-top: '0.6rem';
`;

const Header = styled.header`
  text-align: center;
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
  &:hover {
    color: rgba(157, 157, 157, 0.8);
  }
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

function navbar() {
  return (
    <StaticQuery
      query={graphql`
        query SiteHeaderImageQuery {
          titleImage: file(relativePath: { eq: "images/logo.png" }) {
            childImageSharp {
              fixed(width: 190) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => {
        const { titleImage: { childImageSharp: { fixed: madeByRhysLogo } } } = data;
        return (
          <NavWrapper>
            <Header>
              <Title>
                MadeByRhys
              </Title>
              <TitleImage
                fixed={madeByRhysLogo}
                alt="rhysbrooker.com logo"
              />
            </Header>
            <NavbarContainer>
              {pages.map((page) => {
                const { route, name } = page;
                return (
                  <List
                    key={route}
                    to={route}
                    activeStyle={{ color: '#7e7e7e' }}
                  >
                    {name}
                  </List>
                );
              })}
            </NavbarContainer>
            <BottomBorder>
              {lineColors.map(color => (
                <Line color={color} key={color} />
              ))}
            </BottomBorder>
          </NavWrapper>
        );
      }
    }
    />
  );
}

export default navbar;
