import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.mainDark};
`;

const StyledLink = styled.a`
  margin: 0 auto;
  color: ${({ theme }) => theme.secondaryDark};
  font-weight: 700;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledLink href="https://github.com/RaaaZo" target="_blank">
        Mateusz Koprowicz©
      </StyledLink>
    </Wrapper>
  );
};

export default Footer;
