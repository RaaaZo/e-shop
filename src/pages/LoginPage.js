import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";

import {
  FormWrapper,
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  ErrorMessageWrapper,
  StyledButton,
  StyledError
} from "components/atoms/FormikStyles/FormikStyles";
import LoadingSpinner from "components/atoms/LoadingSpinner/LoadingSpinner";

import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { FormContext } from "context/FormContext";

const StyledParagraph = styled(Paragraph)`
  margin: 20px auto;
  color: ${({ theme }) => theme.secondaryDark};
  text-decoration: underline;
  transition: color 0.4s 0.1s linear;

  &:hover {
    color: ${({ theme }) => theme.secondaryLight};
  }
`;

const validation = Yup.object().shape({
  password: Yup.string()
    .min(6, "Minimum 6 znaków")
    .max(15, "Maksymalnie 15 znaków.")
    .required("Pole wymagane"),
  email: Yup.string()
    .email("Niepoprawny adres e-mail.")
    .required("Pole wymagane")
});

const LoginPage = () => {
  const { setUserData } = useContext(FormContext);

  const { error, isLoading, fetchData } = useFetch(true, null);

  return (
    <FormWrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <StyledHeader>Zaloguj się</StyledHeader>

          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={values => {
              fetchData(
                `${process.env.REACT_APP_BACKEND_URL}/login`,
                {
                  email: values.email,
                  password: values.password
                },
                "post"
              );
              setUserData(values.email);
            }}
            validationSchema={validation}
          >
            <StyledForm>
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

              <StyledLabel htmlFor="password">Hasło</StyledLabel>
              <StyledField
                type="password"
                id="password"
                name="password"
                placeholder="hasło"
              />

              <ErrorMessageWrapper>
                <ErrorMessage name="password" />
              </ErrorMessageWrapper>

              {error && <StyledError>{error}</StyledError>}

              <StyledButton type="submit"> Zaloguj się</StyledButton>
              <StyledParagraph as={Link} to="/register">
                Nie masz konta? Zarejestruj się!
              </StyledParagraph>
            </StyledForm>
          </Formik>
        </>
      )}
    </FormWrapper>
  );
};

export default LoginPage;
