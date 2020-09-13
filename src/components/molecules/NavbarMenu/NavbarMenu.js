import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IsLoggedContext } from "context/IsLoggedContext";

const StyledUl = styled.ul`
  display: none;
  width: 90%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const StyledLi = styled.li`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 10px 25px;
  margin: 0 10px;
  color: white;
  background-color: ${({ theme }) => theme.secondaryLight};
  border: 2px solid white;
  border-radius: 25px;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.secondaryLight};
  transition: color 0.4s 0.1s ease-in-out,
    text-decoration-color 0.4s 0.1s ease-in-out, border 0.4s 0.1s ease-in-out,
    background-color 0.4s 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondaryLight};
    border: 2px solid ${({ theme }) => theme.secondaryLight};
    text-decoration-color: ${({ theme }) => theme.secondaryLight};
    background-color: ${({ theme }) => theme.mainDark};
  }

  &.selected {
    color: ${({ theme }) => theme.secondaryLight};
    border: 2px solid ${({ theme }) => theme.secondaryLight};
    text-decoration-color: ${({ theme }) => theme.secondaryLight};
    background-color: ${({ theme }) => theme.mainDark};
  }

  @media (min-width: 1440px) {
    padding: 15px 25px;
  }
`;

const NavbarMenu = () => {
  const { isLogged, handleIsLogged } = useContext(IsLoggedContext);

  return (
    <StyledUl>
      <StyledLi exact as={NavLink} activeClassName="selected" to="/">
        Home
      </StyledLi>

      <StyledLi exact as={NavLink} activeClassName="selected" to="/t-shirts">
        Koszulki
      </StyledLi>

      <StyledLi exact as={NavLink} activeClassName="selected" to="/shirts">
        Koszule
      </StyledLi>

      <StyledLi exact as={NavLink} activeClassName="selected" to="/sweaters">
        Swetry
      </StyledLi>

      <StyledLi exact as={NavLink} activeClassName="selected" to="/trousers">
        Spodnie
      </StyledLi>

      <StyledLi exact as={NavLink} activeClassName="selected" to="/boots">
        Buty
      </StyledLi>

      {isLogged ? (
        <StyledLi onClick={handleIsLogged} as={NavLink} to="/">
          Wyloguj
        </StyledLi>
      ) : (
        <StyledLi exact as={NavLink} activeClassName="selected" to="/login">
          Zaloguj
        </StyledLi>
      )}
    </StyledUl>
  );
};

export default NavbarMenu;
