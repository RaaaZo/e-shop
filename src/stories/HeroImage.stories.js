import React from "react";
import HeroImage from "components/molecules/HeroImage/HeroImage";
import Navigation from "components/molecules/Navigation/Navigation";

export default {
  title: "Molecules/HeroImage",
  component: HeroImage,
  decorators: [
    Story => (
      <>
        <Navigation />
        <Story />
      </>
    )
  ]
};

export const Primary = () => <HeroImage />;
