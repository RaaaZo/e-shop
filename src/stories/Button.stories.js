import React from "react";
import { Button } from "components/atoms/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button>Potwierdź</Button>;
export const Close = () => <Button close />;
