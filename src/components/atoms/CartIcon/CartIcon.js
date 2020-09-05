import styled from "styled-components";

import cartDark from "assets/svg/cartDark.svg";
import cartWhite from "assets/svg/cartWhite.svg";

const CartIcon = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.secondaryLight};
  background-color: ${({ theme }) => theme.secondaryLight};
  border-radius: 50%;
  background-image: url(${cartWhite});
  background-position: 40% 55%;
  background-size: 80%;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: background-image 0.4s 0.1s linear,
    background-color 0.4s 0.1s linear;

  &:hover {
    background-image: url(${cartDark});
    background-color: ${({ theme }) => theme.mainLight};
  }

  @media (min-width: 1024px) {
    width: 60px;
    height: 60px;
    bottom: 40px;
  }
`;

export default CartIcon;
