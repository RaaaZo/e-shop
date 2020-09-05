import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

const Wrapper = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;

  ${({ isFullScreenVisible }) =>
    isFullScreenVisible &&
    css`
      display: block;
    `}
`;

const StyledImg = styled.img`
  position: absolute;
  max-width: 400px;
  max-height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 600px;
    max-height: 600px;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
    max-height: 800px;
  }
`;

const FullImageModal = ({
  fullScreenImage,
  isFullScreenVisible,
  setisFullScreenVisible
}) => {
  const fadeInModal = useRef(null);

  useEffect(() => {
    const fadeIn = fadeInModal.current;

    gsap.set(fadeIn, { autoAlpha: 0 });

    gsap.fromTo(fadeIn, { autoAlpha: 0 }, { duration: 2, autoAlpha: 1 });
  });

  return (
    <Wrapper
      onClick={() => setisFullScreenVisible(prevState => !prevState)}
      ref={fadeInModal}
      isFullScreenVisible={isFullScreenVisible}
    >
      <StyledImg onClick={e => e.stopPropagation()} src={fullScreenImage} />
    </Wrapper>
  );
};

FullImageModal.propTypes = {
  fullScreenImage: PropTypes.string,
  isFullScreenVisible: PropTypes.bool.isRequired,
  setisFullScreenVisible: PropTypes.func.isRequired
};

export default FullImageModal;
