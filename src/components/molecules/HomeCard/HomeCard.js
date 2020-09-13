import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import useScrollTrigger from "hooks/useScrollTrigger";
import { Link } from "react-router-dom";

import { Header } from "components/atoms/Header/Header";

import tShirtSmall from "assets/images/t-shirt-phone.png";
import sweatersSmall from "assets/images/sweaters-phone.png";
import shirtSmall from "assets/images/shirts-phone.png";
import jeansSmall from "assets/images/jeans-phone.png";
import bootsSmall from "assets/images/boots-phone.png";

const categories = [
  {
    id: 1,
    img: tShirtSmall,
    name: "Koszulki",
    inverse: false,
    link: "/t-shirts"
  },

  {
    id: 2,
    img: sweatersSmall,
    name: "Swetry",
    inverse: true,
    link: "/sweaters"
  },

  {
    id: 3,
    img: shirtSmall,
    name: "Koszule",
    inverse: false,
    link: "/shirts"
  },

  {
    id: 4,
    img: jeansSmall,
    name: "Spodnie",
    inverse: true,
    link: "/trousers"
  },

  {
    id: 5,
    img: bootsSmall,
    name: "Buty",
    inverse: false,
    link: "/boots"
  }
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 768px;
  margin: 2px 0;
  height: 150px;

  cursor: pointer;
  transition: transform 0.4s 0.1s ease-in-out,
    background-image 0.4s 0.1s ease-in-out;

  &:first-of-type {
    margin-top: 10px;
  }

  &:last-of-type {
    margin-bottom: 50px;
  }

  &:hover {
    transform: scale(1.01);
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

const StyledImg = styled.img`
  width: 50%;
  height: 100%;
  transition: filter 0.2s ease-in-out;
  border-radius: 10px;
  object-fit: cover;

  ${CardWrapper}:hover & {
    filter: blur(2px);
  }

  ${({ inverse }) =>
    inverse &&
    css`
      order: 2;
    `}
`;

const StyledHeader = styled(Header)`
  width: 50%;
  color: ${({ theme }) => theme.secondaryLight};
  text-align: center;

  ${({ inverse }) =>
    inverse &&
    css`
      order: 1;
    `}
`;

const HomeCard = () => {
  const cardDivs = useRef([]);
  cardDivs.current = [];

  const addToRefs = el => {
    if (el && !cardDivs.current.includes(el)) {
      cardDivs.current.push(el);
    }
  };

  const { scrollTriggerAnimation } = useScrollTrigger(cardDivs);

  useEffect(() => {
    scrollTriggerAnimation();
  }, []);

  return (
    <Wrapper>
      {categories.map(({ link, id, inverse, img, name }) => (
        <CardWrapper
          ref={addToRefs}
          as={Link}
          to={link}
          key={id}
          inverse={inverse}
        >
          <StyledImg inverse={inverse} src={img} alt={name} />
          <StyledHeader inverse={inverse}>{name}</StyledHeader>
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

export default HomeCard;
