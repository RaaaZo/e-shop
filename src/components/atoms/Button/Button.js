import styled, { css } from "styled-components";
import closeSvg from "assets/svg/close.svg";

export const Button = styled.button`
  width: 160px;
  height: 100%;
  padding: 10px 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.secondaryLight};
  border: 2px solid white;
  border-radius: 15px;
  text-align: center;
  transition: 0.4s 0.1s linear;

  &:hover {
    background-color: ${({ theme }) => theme.mainLight};
    border: 2px solid ${({ theme }) => theme.secondaryLight};
    color: ${({ theme }) => theme.secondaryLight};
  }

  ${({ close }) =>
    close &&
    css`
      width: 40px;
      padding: 20px;
      background-image: url(${closeSvg});
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-color: red;
      border: 2px solid black;
      border-radius: 100%;
    `}
`;
