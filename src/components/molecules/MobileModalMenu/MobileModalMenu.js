import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { IsLoggedContext } from "context/IsLoggedContext";

const NavModal = styled.div`
  width: 150px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.mainDark};
  -webkit-box-shadow: -10px 5px 30px -8px rgba(0, 0, 0, 1);
  -moz-box-shadow: -10px 5px 30px -8px rgba(0, 0, 0, 1);
  box-shadow: -10px 5px 30px -8px rgba(0, 0, 0, 1);
  z-index: 999;
  transform: translateX(200%);
  transition: transform 0.6s 0.1s ease-in-out;

  @media (min-width: 414px) {
    width: 200px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 250px;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  ${({ isModalMenuOpen }) =>
    isModalMenuOpen &&
    css`
      transform: translateX(0);
    `}
`;

const StyledNavLink = styled(NavLink)`
  width: 90%;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  color: white;
  background-color: ${({ theme }) => theme.secondaryLight};
  padding: 10px 20px;
  text-align: center;
  border: 2px solid white;
  border-radius: 15px;
  transition: color 0.4s 0.1s ease-in-out,
    background-color 0.4s 0.1s ease-in-out, border 0.4s 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondaryLight};
    background-color: ${({ theme }) => theme.mainDark};
    border: 2px solid ${({ theme }) => theme.secondaryLight};
  }

  @media (min-width: 414px) {
    margin: 15px 0;
  }

  @media (min-width: 768px) {
    margin: 30px 0;
  }

  @media (orientation: landscape) {
    margin: 5px 0;
    padding: 5px 20px;
  }

  @media (orientation: landscape) and (min-width: 667px) and (max-width: 668px) {
    margin: 5px 0;
    padding: 2px 20px;
  }

  &.selected {
    color: ${({ theme }) => theme.secondaryLight};
    background-color: ${({ theme }) => theme.mainDark};
    border: 2px solid ${({ theme }) => theme.secondaryLight};
  }
`;

const MobileModalMenu = ({ handleModalMenu, isModalMenuOpen }) => {
  const { isLogged, handleIsLogged } = useContext(IsLoggedContext);

  return (
    <NavModal isModalMenuOpen={isModalMenuOpen}>
      <StyledNavLink
        exact
        onClick={handleModalMenu}
        activeClassName="selected"
        to="/"
      >
        Home
      </StyledNavLink>

      <StyledNavLink
        exact
        onClick={handleModalMenu}
        activeClassName="selected"
        to="/t-shirts"
      >
        T-shirty
      </StyledNavLink>

      <StyledNavLink
        exact
        onClick={handleModalMenu}
        activeClassName="selected"
        to="/shirts"
      >
        Koszule
      </StyledNavLink>

      <StyledNavLink
        exact
        onClick={handleModalMenu}
        activeClassName="selected"
        to="/sweaters"
      >
        Swetry
      </StyledNavLink>

      <StyledNavLink
        exact
        onClick={handleModalMenu}
        activeClassName="selected"
        to="/trousers"
      >
        Spodnie
      </StyledNavLink>

      <StyledNavLink
        exact
        onClick={handleModalMenu}
        activeClassName="selected"
        to="/boots"
      >
        Buty
      </StyledNavLink>

      {isLogged ? (
        <StyledNavLink
          onClick={() => {
            handleIsLogged();
            handleModalMenu();
          }}
          to="/"
        >
          Wyloguj
        </StyledNavLink>
      ) : (
        <StyledNavLink
          exact
          onClick={handleModalMenu}
          activeClassName="selected"
          to="/login"
        >
          Zaloguj
        </StyledNavLink>
      )}
    </NavModal>
  );
};

MobileModalMenu.propTypes = {
  handleModalMenu: PropTypes.func.isRequired,
  isModalMenuOpen: PropTypes.bool.isRequired
};

export default MobileModalMenu;
