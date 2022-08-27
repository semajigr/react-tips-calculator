import React, { ChangeEventHandler } from "react";
import { CustomInput } from "../input/styles";
import { useInput } from "../../hooks/useInput";

interface IProps {
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input = ({ type, placeholder, onChange }: IProps) => {
  return (
    <>
      <CustomInput type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
};
