import React, { useContext } from "react";
import { Header } from "components/atoms/Header/Header";
import { FormContext } from "context/FormContext";
import styled from "styled-components";
import { Button } from "components/atoms/Button/Button";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px auto;
  border: 3px solid ${({ theme }) => theme.mainDark};
`;

const StyledHeader = styled(Header)`
  width: 100%;
  display: block;
  margin: 40px auto;
  color: ${({ theme }) => theme.secondaryDark};
`;

const StyledButton = styled(Button)`
  margin: 0 auto 40px auto;
  width: 60%;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const ThanksForBuyingPage = () => {
  const { cartUserData } = useContext(FormContext);

  const { push } = useHistory();

  return (
    <Wrapper>
      <StyledHeader>
        {cartUserData.firstName}, dziękujemy za zakupy w naszym sklepie!
      </StyledHeader>

      <StyledHeader>
        {`Zakupione rzeczy zostaną wysłane na adres: ${cartUserData.city}, ${cartUserData.address}`}
      </StyledHeader>

      <StyledHeader>Koniecznie zobacz więcej rzeczy!</StyledHeader>

      <StyledButton onClick={() => push("/")}>Więcej rzeczy</StyledButton>
    </Wrapper>
  );
};

export default ThanksForBuyingPage;
