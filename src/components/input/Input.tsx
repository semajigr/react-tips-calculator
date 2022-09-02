import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";
import { useInput } from "../../hooks/useInput";

interface IProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, onChange }: IProps) => {
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onChange} />
  );
};
