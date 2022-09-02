import React from "react";
import { CustomButton } from "./styles";

interface IProps {
  type: "submit" | "button" | "reset";
  isDisabled: boolean;
}

export const Button = ({ isDisabled, type }: IProps) => {
  return (
    <CustomButton disabled={isDisabled} type={type}>
      Ohhhoooo 🍻
    </CustomButton>
  );
};
