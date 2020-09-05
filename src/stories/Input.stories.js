import React from "react";
import { Input } from "components/atoms/Input/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Primary = () => (
  <Input placeholder="Hello there my little friend" />
);
export const Error = () => (
  <Input error placeholder="Hello there my little friend" />
);
