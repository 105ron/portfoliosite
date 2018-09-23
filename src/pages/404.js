import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Device from '../assets/styles/mediaQueries';
import BannerImage from '../components/BannerImage/BannerImage';
import sadFace from '../assets/images/sad.svg';

const Wrapper = styled.div`
  text-align: center;
  max-width: var(--maxwidth);
  margin: 1.8rem auto;
  padding: 0 20px;
`;

const SadFace = styled.img`
  height: 500px;
  width: 500px;
  @media ${Device.tablet} {
    height: 250px;
    width: 250px;
  }
`;

function NotFoundPage(props) {
  return (
    <Layout>
      <BannerImage
        heading="Error"
        tagline="Page not found (That's a 404 error)"
        alt="Sydney harbour banner image"
      />
      <Wrapper>
        <SadFace src={sadFace} alt="Sad face" />
        <p>
          The page you requested doesn&#39;t exist. Did you click a link to get here?
          Please click the email icon below and tell me how you got here. Thanks, Rhys.
        </p>
      </Wrapper>
    </Layout>
  );
}

export default NotFoundPage;
