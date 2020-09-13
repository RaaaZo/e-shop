import React, { useState } from "react";
import styled, { css } from "styled-components";

import HamburgerMenu from "components/atoms/HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
import MobileModalMenu from "../MobileModalMenu/MobileModalMenu";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.mainDark};

  @media (min-width: 414px) {
    height: 125px;
  }

  @media (min-width: 768px) {
    height: 150px;
  }
`;

const StyledLogo = styled(Link)`
  font-family: "Satisfy", cursive;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: ${({ theme }) => theme.secondaryLight};

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  @media (min-width: 1440px) {
    font-size: 5rem;
  }
`;

const IsOpenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 900;
  transform: translateX(200%);
  transition: transform 0.6s 0.1s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

const Navigation = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  const handleModalMenu = () => {
    setIsModalMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <IsOpenModal isOpen={isModalMenuOpen} onClick={handleModalMenu} />
      <Wrapper>
        <StyledLogo to="/">E-shop</StyledLogo>
        <NavbarMenu />

        <HamburgerMenu
          isModalMenuOpen={isModalMenuOpen}
          handleModalMenu={handleModalMenu}
        />

        <MobileModalMenu
          isModalMenuOpen={isModalMenuOpen}
          handleModalMenu={handleModalMenu}
        />
      </Wrapper>
    </>
  );
};

export default Navigation;
