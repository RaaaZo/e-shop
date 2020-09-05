import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  width: 50px;
  height: 40px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.secondaryLight};
  cursor: pointer;
  z-index: 999;
  transition: transform 0.6s linear;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      transform: translateX(-150px);
      @media (min-width: 414px) {
        transform: translateX(-200px);
      }
      @media (min-width: 768px) {
        transform: translateX(-250px);
      }
    `}

  @media (min-width: 1024px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 50px;
    border: 3px solid ${({ theme }) => theme.secondaryLight};
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 3px;
  background-color: ${({ theme }) => theme.secondaryLight};
  z-index: 999;
  transition: background-color 0.6s linear;

  &::before {
    content: "";
    position: absolute;
    bottom: 7px;
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.secondaryLight};
    transition: transform 0.6s linear;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -7px;
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.secondaryLight};
    transition: transform 0.6s linear;
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      background-color: transparent;

      &::before {
        content: "";
        transform: translateY(7px) rotate(45deg);
      }

      &::after {
        content: "";
        transform: translateY(-7px) rotate(-45deg);
      }
    `}
`;

const HamburgerMenu = ({ handleModalMenu, isModalMenuOpen }) => {
  return (
    <Wrapper isMenuOpen={isModalMenuOpen} onClick={handleModalMenu}>
      <Hamburger isMenuOpen={isModalMenuOpen} />
    </Wrapper>
  );
};

HamburgerMenu.propTypes = {
  handleModalMenu: PropTypes.func.isRequired,
  isModalMenuOpen: PropTypes.bool.isRequired,
};

export default HamburgerMenu;
