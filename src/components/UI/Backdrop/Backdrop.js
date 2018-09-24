import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

function backdrop(props) {
  const { show, click } = props;
  return (
    show ? <Backdrop onClick={click} /> : null
  );
}

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

export default backdrop;
