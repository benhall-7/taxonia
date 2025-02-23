import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";

export default function RadioSelect<T extends string[]>({
  options,
  names,
  value,
  setValue,
  radioGroupProps,
}: Props<T>) {
  return (
    <RadioGroup
      row
      {...radioGroupProps}
      value={value}
      onChange={(e) => setValue(e.target.value as T[number])}
    >
      {options.map((option, index) => (
        <FormControlLabel
          value={option}
          control={<Radio />}
          label={names[index]}
        />
      ))}
    </RadioGroup>
  );
}

type Props<T extends string[]> = {
  options: T;
  names: string[];
  value: T[number];
  setValue(value: T[number]): void;
  radioGroupProps?: RadioGroupProps;
};
