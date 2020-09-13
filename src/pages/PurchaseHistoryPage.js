import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Button } from "components/atoms/Button/Button";
import { FormContext } from "context/FormContext";
import LoadingSpinner from "components/atoms/LoadingSpinner/LoadingSpinner";
import { Header } from "components/atoms/Header/Header";
import { PagesWrapper } from "components/atoms/PagesWrapper/PagesWrapper";
import PagesCards from "components/molecules/PagesCards/PagesCards";
import { Link } from "react-router-dom";
import useFetch from "hooks/useFetch";

const ButtonsWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledError = styled(Header)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.secondaryLight};
`;

const PurchaseHistoryPage = () => {
  const { userData } = useContext(FormContext);

  const userEmailToLowerCase = userData.toLowerCase();

  const { data, error, isLoading, fetchData } = useFetch();

  useEffect(() => {
    fetchData(
      `${process.env.REACT_APP_BACKEND_URL}/getUser/${userEmailToLowerCase}`,
      null,
      "get"
    );
  }, [userEmailToLowerCase]);

  let cartArray;
  if (data) {
    cartArray = data.data.user.cart.flat(1);
  }

  if (error) {
    return <StyledError>{error}</StyledError>;
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <PagesWrapper>
          {!isLoading &&
            cartArray &&
            cartArray.map(item => (
              <PagesCards
                id={item.id}
                key={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
              />
            ))}

          <ButtonsWrapper>
            <Button as={Link} to="/cart">
              Koszyk
            </Button>
            <Button as={Link} to="/">
              Strona główna
            </Button>
          </ButtonsWrapper>
        </PagesWrapper>
      )}
    </>
  );
};

export default PurchaseHistoryPage;
