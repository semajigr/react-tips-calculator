import React from "react";
import { CustomButton } from "../button/styles";

interface IProps {
  type: "submit" | "button" | "reset" | undefined;
  disabled: boolean;
}

export const Button = ({ disabled, type }: IProps) => {
  return (
    <CustomButton disabled={disabled} type={type}>
      Ohhhoooo 🍻
    </CustomButton>
  );
};
