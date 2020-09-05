import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

import heroSmall from "assets/images/heroSmall.png";
import heroMedium from "assets/images/heroMedium.png";
import heroBig from "assets/images/heroBig.png";
import { Header } from "components/atoms/Header/Header";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background-image: url(${heroSmall});
  background-size: cover;
  background-position: 50% 80%;
  background-repeat: no-repeat;

  @media (min-width: 665px) {
    background-image: url(${heroMedium});
    height: 250px;
  }

  @media (min-width: 1024px) {
    background-image: url(${heroBig});
    height: 350px;
    background-position: bottom;
  }
`;

const StyledHeader = styled(Header)`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.secondaryLight};
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 1px;

  @media (min-width: 665px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const HeroImage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { autoAlpha: 0 },
      { duration: 3, autoAlpha: 1, ease: "none" }
    );
  });

  return (
    <Wrapper ref={heroRef}>
      <StyledHeader>Odkryj swój styl!</StyledHeader>
    </Wrapper>
  );
};

export default HeroImage;
