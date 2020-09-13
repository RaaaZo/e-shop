import React, { useContext } from "react";
import * as Yup from "yup";

import { Formik, ErrorMessage } from "formik";

import { FormContext } from "context/FormContext";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "ducks/actions/store.actions";
import {
  FormWrapper,
  StyledHeader,
  StyledForm,
  StyledLabel,
  StyledField,
  ErrorMessageWrapper,
  StyledButton
} from "components/atoms/FormikStyles/FormikStyles";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";
import { IsLoggedContext } from "context/IsLoggedContext";
import useFetch from "hooks/useFetch";

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

const StyledParagraph = styled(Paragraph)`
  margin: 20px auto;
  color: ${({ theme }) => theme.secondaryDark};
  transition: color 0.4s 0.1s linear;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.secondaryLight};
  }
`;

const BuyFormPage = () => {
  const { setCartUserData, userData } = useContext(FormContext);
  const { isLogged } = useContext(IsLoggedContext);

  const { fetchData } = useFetch();

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

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
          setCartUserData(values);
          push("/boughtItems");

          if (isLogged) {
            fetchData(
              `${process.env.REACT_APP_BACKEND_URL}/addToCart`,
              {
                email: userData,
                cart
              },
              "post"
            );
          }

          dispatch(clearCart());
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

          {!isLogged && (
            <StyledParagraph as={Link} to="/login">
              Zaloguj się i dodaj produkty z koszyka do swojej historii zakupów!
            </StyledParagraph>
          )}
        </StyledForm>
      </Formik>
    </FormWrapper>
  );
};

export default BuyFormPage;
