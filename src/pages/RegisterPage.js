import React from "react";
import * as Yup from "yup";

import useFetch from "hooks/useFetch";
import {
  FormWrapper,
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  ErrorMessageWrapper,
  StyledError,
  StyledButton
} from "components/atoms/FormikStyles/FormikStyles";
import LoadingSpinner from "components/atoms/LoadingSpinner/LoadingSpinner";
import { Formik, ErrorMessage } from "formik";

const validation = Yup.object().shape({
  name: Yup.string()
    .max(15, "Maksymalnie 15 znaków.")
    .required("Pole wymagane"),
  password: Yup.string()
    .min(6, "Minimum 6 znaków")
    .max(15, "Maksymalnie 15 znaków.")
    .required("Pole wymagane"),
  email: Yup.string()
    .email("Niepoprawny adres e-mail.")
    .required("Pole wymagane")
});

const RegisterPage = () => {
  const { error, isLoading, fetchData } = useFetch(null, true);

  return (
    <FormWrapper>
      <StyledHeader>Zaloguj się</StyledHeader>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: ""
          }}
          onSubmit={values => {
            fetchData(`${process.env.REACT_APP_BACKEND_URL}/register`, {
              name: values.name,
              email: values.email,
              password: values.password
            });
          }}
          validationSchema={validation}
        >
          <StyledForm>
            <StyledLabel htmlFor="name">Imię</StyledLabel>
            <StyledField type="name" id="name" name="name" placeholder="imię" />

            <ErrorMessageWrapper>
              <ErrorMessage name="name" />
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

            <StyledButton type="submit">Zarejestruj się</StyledButton>
          </StyledForm>
        </Formik>
      )}
    </FormWrapper>
  );
};

export default RegisterPage;
