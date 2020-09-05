import React from "react";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
};

export const Primary = () => (
  <Paragraph>
    Just click below in search by country name or search by capital button and
    search just like that all info about selected country!
  </Paragraph>
);
