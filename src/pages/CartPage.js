import React, { useContext } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { IsLoggedContext } from "context/IsLoggedContext";

import EmptyCart from "components/organisms/EmptyCart/EmptyCart";
import PagesCards from "components/molecules/PagesCards/PagesCards";
import { Header } from "components/atoms/Header/Header";
import { Button } from "components/atoms/Button/Button";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";

const CartPageWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const CartDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 20px;
  padding-right: 10px;

  @media (min-width: 1024px) {
    order: 1;
    width: 60%;
    border-right: 2px solid ${({ theme }) => theme.mainDark};
  }

  @media (min-width: 1440px) {
    width: 70%;
  }
`;

const SumCartWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin: 40px auto;
  border: 2px solid ${({ theme }) => theme.secondaryLight};

  @media (min-width: 665px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    margin: 40px 20px;
    order: 2;
    width: 40%;
  }

  @media (min-width: 1440px) {
    width: 50%;
  }
`;

const StyledHeader = styled(Header)`
  margin: 20px auto;
  color: ${({ theme }) => theme.secondaryDark};
`;

const StyledButton = styled(Button)`
  margin: 10px auto 0 auto;
  padding: 25px 20px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px auto;
  color: ${({ theme }) => theme.secondaryDark};
  text-decoration: underline;
  transition: color 0.4s 0.1s linear;

  &:hover {
    color: ${({ theme }) => theme.secondaryLight};
  }
`;

const Cart = () => {
  const { push } = useHistory();

  const { isLogged } = useContext(IsLoggedContext);

  const cart = useSelector(state => state.cart);

  const fullPrice = () => {
    const prices = cart.map(item => item.price);

    const totalPrice = prices.reduce((total, amount) => {
      return total + amount;
    });

    return totalPrice;
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <CartPageWrapper>
      <SumCartWrapper>
        <StyledHeader>Ilość rzeczy : {cart.length}</StyledHeader>
        <StyledHeader>Suma : {fullPrice()} zł</StyledHeader>
        <StyledButton onClick={() => push("/buyForm")}>Kup Teraz</StyledButton>

        {isLogged ? (
          <StyledButton onClick={() => push("/purchaseHistory")}>
            Historia zakupów
          </StyledButton>
        ) : (
          <StyledParagraph as={Link} to="/login">
            Zaloguj się i zobacz historię zakupów.
          </StyledParagraph>
        )}
      </SumCartWrapper>

      <CartDetailsWrapper>
        {cart.map(item => (
          <PagesCards
            id={item.id}
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            cartCard="true"
          />
        ))}
      </CartDetailsWrapper>
    </CartPageWrapper>
  );
};

export default Cart;
