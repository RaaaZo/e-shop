import React, { useContext } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { Header } from "components/atoms/Header/Header";
import { Button } from "components/atoms/Button/Button";
import { FormContext } from "context/FormContext";
import { useHistory } from "react-router-dom";

const validation = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "Maksymalnie 15 znaków.")
    .required("Pole wymagane"),
  lastName: Yup.string()
    .max(20, "Maksymalnie 20 znaków.")
    .required("Pole wymagane"),
  email: Yup.string()
    .email("Niepoprawny adres e-mail.")
    .required("Pole wymagane"),
  address: Yup.string().required("Pole wymagane"),
  postCode: Yup.string().required("Pole wymagane"),
  city: Yup.string().required("Pole wymagane")
});

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 60px auto;
`;

const StyledForm = styled(Form)`
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

const StyledLabel = styled.label`
  margin: 20px auto;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryLight};
`;

const StyledField = styled(Field)`
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 10px 30px;
  border: 2px solid ${({ theme }) => theme.secondaryLight};
  border-radius: 15px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin: 20px auto;
`;

const StyledHeader = styled(Header)`
  color: ${({ theme }) => theme.secondaryDark};
`;

const ErrorMessageWrapper = styled.div`
  font-family: "Oswald", sans-serif;
  color: red;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const BuyFormPage = () => {
  const { setUserData } = useContext(FormContext);

  const { push } = useHistory();

  return (
    <FormWrapper>
      <StyledHeader>Formularz zakupu :</StyledHeader>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          postCode: "",
          city: ""
        }}
        onSubmit={values => {
          setUserData(values);
          push("/boughtItems");
        }}
        validationSchema={validation}
      >
        <StyledForm>
          <StyledLabel htmlFor="firstName">Imię</StyledLabel>
          <StyledField
            type="text"
            id="firstName"
            name="firstName"
            placeholder="imię"
          />

          <ErrorMessageWrapper>
            <ErrorMessage name="firstName" />
          </ErrorMessageWrapper>

          <StyledLabel htmlFor="lastName">Nazwisko</StyledLabel>
          <StyledField
            type="text"
            id="lastName"
            name="lastName"
            placeholder="nazwisko"
          />

          <ErrorMessageWrapper>
            <ErrorMessage name="lastName" />
          </ErrorMessageWrapper>

          <StyledLabel htmlFor="email">E-mail</StyledLabel>
          <StyledField
            type="email"
            id="email"
            name="email"
            placeholder="e-mail"
          />

          <ErrorMessageWrapper>
            <ErrorMessage name="email" />
          </ErrorMessageWrapper>

          <StyledLabel htmlFor="city">Miasto</StyledLabel>
          <StyledField type="text" id="city" name="city" placeholder="miasto" />

          <ErrorMessageWrapper>
            <ErrorMessage name="city" />
          </ErrorMessageWrapper>

          <StyledLabel htmlFor="postCode">Kod pocztowy</StyledLabel>
          <StyledField
            type="text"
            id="postCode"
            name="postCode"
            placeholder="kod pocztowy"
          />

          <ErrorMessageWrapper>
            <ErrorMessage name="postCode" />
          </ErrorMessageWrapper>

          <StyledLabel htmlFor="address">Adres</StyledLabel>
          <StyledField
            type="text"
            id="address"
            name="address"
            placeholder="adres"
          />

          <ErrorMessageWrapper>
            <ErrorMessage name="address" />
          </ErrorMessageWrapper>

          <StyledButton type="submit">Zamów</StyledButton>
        </StyledForm>
      </Formik>
    </FormWrapper>
  );
};

export default BuyFormPage;
