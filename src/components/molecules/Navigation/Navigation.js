import React, { useState } from "react";
import styled from "styled-components";

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
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.secondaryLight};

  @media (min-width: 1124px) {
    font-size: 4rem;
  }
`;

const Navigation = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  const handleModalMenu = () => {
    setIsModalMenuOpen(prevState => !prevState);
  };

  return (
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
  );
};

export default Navigation;
