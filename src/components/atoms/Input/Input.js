import styled, { css } from "styled-components";

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 10px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.secondaryLight};
  border: 2px solid ${({ theme }) => theme.secondaryDark};
  border-radius: 5px;
  &::placeholder {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
  }
  @media (min-width: 414px) {
    padding: 10px 30px;
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 10px 50px;
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 10px 50px;
  }
  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    padding: 10px 80px;
  }
  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    padding: 10px 100px;
  }
  ${({ error }) =>
    error &&
    css`
      background-color: rgba(255, 0, 0, 0.8);
      border: 2px solid ${({ theme }) => theme.secondaryDark};
      &::placeholder {
        color: ${({ theme }) => theme.secondaryDark};
      }
    `}
`;
