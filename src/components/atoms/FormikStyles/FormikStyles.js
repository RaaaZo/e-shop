import { Form, Field } from "formik";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { Paragraph } from "../Paragraph/Paragraph";

const { default: styled } = require("styled-components");

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 60px auto;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto;
  border: 3px solid ${({ theme }) => theme.mainDark};

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const StyledLabel = styled.label`
  margin: 20px auto;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryLight};
`;

export const StyledField = styled(Field)`
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 10px 30px;
  border: 2px solid ${({ theme }) => theme.secondaryLight};
  border-radius: 15px;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin: 20px auto;
`;

export const StyledHeader = styled(Header)`
  color: ${({ theme }) => theme.secondaryDark};
`;

export const ErrorMessageWrapper = styled.div`
  font-family: "Oswald", sans-serif;
  color: red;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledError = styled(Paragraph)`
  margin: 10px auto;
  color: red;
`;
