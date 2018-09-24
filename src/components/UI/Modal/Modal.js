import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 105;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-120vh)'};
  opacity: ${props => props.show ? '1' : '0'};
  transition: all 0.3s ease-out;
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  border: non;
  right: 16px;
  top: 16px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    left: 8px;
    top: -2px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
  transform: rotate(45deg);
  }
  &:after {
  transform: rotate(-45deg);
}
`;

function modal(props) {
  const { children, show, modalClosed } = props;
  return (
    <React.Fragment>
      <Backdrop
        show={show}
        click={modalClosed}
      />
      <ModalWrapper show={show}>
        <CloseButton onClick={modalClosed} />
        {children}
      </ModalWrapper>
    </React.Fragment>
  );
}

modal.defaultProps = {
  children: null,
};

modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
};

export default modal;

/* eslint no-confusing-arrow: "off", react/destructuring-assignment: "off" */
