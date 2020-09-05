import styled from "styled-components";

export const Label = styled.label`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.secondaryDark};
  text-align: center;
  @media (min-width: 414px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
