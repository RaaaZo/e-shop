import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { Header } from "components/atoms/Header/Header";
import { Button } from "components/atoms/Button/Button";
import { ReactComponent as EmptyCardSvg } from "assets/svg/empty-cart.svg";
import { useHistory } from "react-router-dom";
import gsap from "gsap/gsap-core";

const EmptyCartWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
`;

const CartIsEmptyHeader = styled(Header)`
  margin-bottom: 80px;
  color: ${({ theme }) => theme.secondaryLight};
`;

const StyledButton = styled(Button)`
  margin-top: 80px;
`;

const StyledSvg = styled(EmptyCardSvg)`
  width: 100%;
  margin: auto 20px;
`;

const EmptyCart = () => {
  const { push } = useHistory();

  const emptyCart = useRef(null);

  useEffect(() => {
    const emptyCartAnimation = emptyCart.current;
    gsap.set(emptyCartAnimation, { autoAlpha: 0 });
    gsap.fromTo(
      emptyCartAnimation,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 3, delay: 0.5 }
    );
  });

  return (
    <EmptyCartWrapper ref={emptyCart}>
      <CartIsEmptyHeader>Koszyk jest pusty</CartIsEmptyHeader>
      <StyledSvg />
      <StyledButton onClick={() => push("/")}>Wróć do sklepu</StyledButton>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;
