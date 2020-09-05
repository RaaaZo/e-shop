import styled from "styled-components";

export const Header = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
