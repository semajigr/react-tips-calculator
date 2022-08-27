import Select, { SingleValue } from "react-select";
import { IOption } from "../../types";
import { CustomStyles } from "./styles";

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface IProps {
  percent: number;
  setPercent: (value: number) => void;
}

export const CustomSelect = ({ percent, setPercent }: IProps) => {
  const getValue = () =>
    options.find((option) => {
      return option.value === percent;
    });

  const handleChange = (option: SingleValue<IOption>) => {
    if (option) setPercent(option.value);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={getValue()}
      styles={CustomStyles}
    />
  );
};
