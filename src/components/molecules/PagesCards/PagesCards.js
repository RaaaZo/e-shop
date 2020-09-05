import React, { useState, Fragment } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { addToCart, removeFromCart } from "ducks/actions/store.actions";

import { Header } from "components/atoms/Header/Header";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { Button } from "components/atoms/Button/Button";
import FullImageModal from "components/atoms/FullImageModal/FullImageModal";

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 768px;
  height: 180px;
  margin: 10px 0;

  &:first-of-type {
    margin-top: 10px;
  }

  &::before {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(184, 132, 133, 1) 0%,
      rgba(184, 132, 133, 0) 60%
    );

    ${({ inverse }) =>
      inverse &&
      css`
        background: linear-gradient(
          90deg,
          rgba(184, 132, 133, 0) 0%,
          rgba(184, 132, 133, 1) 60%
        );
      `}
  }

  @media (min-width: 768px) {
    height: 210px;
  }

  @media (min-width: 1024px) {
    height: 300px;
  }
`;

const DetailsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;

  ${({ inverse }) =>
    inverse &&
    css`
      order: 1;
    `}
`;

const StyledImg = styled.img`
  width: 50%;
  height: 100%;
  transition: filter 0.2s ease-in-out;
  border-radius: 10px;
  cursor: pointer;
  object-fit: cover;

  ${({ inverse }) =>
    inverse &&
    css`
      order: 2;
    `};
`;

const StyledHeader = styled(Header)`
  width: 100%;
  color: ${({ theme }) => theme.secondaryLight};
  text-align: center;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.secondaryDark};
  margin: 10px 0;
  font-weight: 700;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 200px;
    margin-top: 40px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  ${({ deleteFromCart }) =>
    deleteFromCart &&
    css`
      width: 100px;
      background-color: ${({ theme }) => theme.mainDark};
    `}
`;

const PagesCards = ({ id, img, name, price, inverse, cartCard, clothType }) => {
  const [isFullScreenVisible, setisFullScreenVisible] = useState(false);

  const dispatch = useDispatch();

  const handleFullScreenImage = () => {
    setisFullScreenVisible(prevState => !prevState);
  };

  const handleAddToCart = (id, clothType) => {
    toast.success("Dodano do koszyka!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    dispatch(addToCart(id, clothType));
  };

  const handleRemoveFromCart = id => {
    toast.success("Usunięto z koszyka!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    dispatch(removeFromCart(id));
  };

  return (
    <Fragment>
      <FullImageModal
        fullScreenImage={img}
        isFullScreenVisible={isFullScreenVisible}
        setisFullScreenVisible={setisFullScreenVisible}
      />

      <CardWrapper inverse={inverse}>
        <StyledImg
          inverse={inverse}
          onClick={handleFullScreenImage}
          src={img}
        />
        <DetailsWrapper inverse={inverse}>
          <StyledHeader>{name}</StyledHeader>
          <StyledParagraph>{price} zł</StyledParagraph>

          {cartCard ? (
            <StyledButton
              deleteFromCart="true"
              onClick={() => handleRemoveFromCart(id)}
            >
              Usuń
            </StyledButton>
          ) : (
            <StyledButton onClick={() => handleAddToCart(id, clothType)}>
              Dodaj do koszyka
            </StyledButton>
          )}
        </DetailsWrapper>
      </CardWrapper>
    </Fragment>
  );
};

PagesCards.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inverse: PropTypes.bool,
  cartCard: PropTypes.string.isRequired,
  clothType: PropTypes.string.isRequired,
  id: PropTypes.bool.isRequired
};

PagesCards.defaultProps = {
  inverse: false
};

export default PagesCards;
