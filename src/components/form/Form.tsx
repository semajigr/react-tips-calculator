import React, { FormEvent, useEffect, useState } from "react";
import { CustomSelect, options } from "../customSelect/CustomSelect";
import { Input } from "../input/Input";
import { CustomForm, Title, Description, Tips } from "../form/styles";
import { Button } from "../button/Button";
import { useInput } from "../../hooks/useInput";

export const Form = () => {
  const bill = useInput();
  const persons = useInput();

  const [percent, setPercent] = useState<number>(options[0].value);
  const [total, setTotal] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleTotal = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setTotal(((+bill.value / +persons.value) * (percent + 100)) / 100);
  };

  useEffect(() => {
    bill.value && persons.value ? setIsActive(false) : setIsActive(true);
  }, [bill.value, persons.value]);

  return (
    <CustomForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <Description>Let’s go calculate your tips</Description>
      <Input type="number" placeholder="Enter bill" {...bill} />
      <Input type="number" placeholder="Enter persons" {...persons} />
      <CustomSelect percent={percent} setPercent={setPercent} />
      <Tips>Total: {total.toFixed(2)} $</Tips>
      <Button type="submit" disabled={isActive} />
    </CustomForm>
  );
};
