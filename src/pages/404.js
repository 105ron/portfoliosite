import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import sadFace from '../assets/sad.svg';
import BannerImage from '../components/BannerImage';
import Device from '../assets/mediaqueries';

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
  const { bannerImage } = props;
  return (
    <div>
      <BannerImage
        heading="Error"
        tagline="Page not found (That's a 404 error)"
        image={bannerImage}
        alt="Sydney harbour banner image"
      />
      <Wrapper>
        <SadFace src={sadFace} alt="Sad face" />
        <p>
          The page you requested doesn&#39;t exist. Did you click a link to get here?
          Please click the email icon below and tell me how you got here. Thanks, Rhys.
        </p>
      </Wrapper>
    </div>
  );
}

NotFoundPage.propTypes = {
  bannerImage: PropTypes.object.isRequired,
};

export default NotFoundPage;

/* eslint import/no-extraneous-dependencies: "off" */
