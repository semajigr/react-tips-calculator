import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { CustomSelect, options } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Title, Description, Tips } from "./styles";
import { Button } from "../Button/Button";
import { useInput } from "../../hooks/useInput";

export const Form = () => {
  const bill = useInput();
  const persons = useInput();

  const [percent, setPercent] = useState<number>(options[0].value);
  const [total, setTotal] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleTotal = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setTotal(((+bill.value / +persons.value) * (percent + 100)) / 100);
  };

  useEffect(() => {
    bill.value && persons.value ? setIsActive(false) : setIsActive(true);
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <Input type="number" placeholder="Enter bill" {...bill} />
      <Input type="number" placeholder="Enter persons" {...persons} />
      <CustomSelect percent={percent} setPercent={setPercent} />
      <Tips>Total: {total.toFixed(2)} $</Tips>
      <Button type="submit" isDisabled={isActive} />
    </StyledForm>
  );
};
