import React from "react";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import { Ul, Li } from "./styles";

function CheckboxList({
  selectValues,
  labelComponent,
  options,
  name,
  onChange,
  onClickLabel,
}) {
  const handleChange = (value) => {
    const newValues = [...selectValues];
    const indexValue = newValues.indexOf(value);
    if (indexValue !== -1) {
      newValues.splice(indexValue, 1);
    } else {
      newValues.push(value);
    }
    onChange && onChange(newValues);
  };
  return (
    <Ul>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            value={option.value}
            text={option.title}
            labelComponent={labelComponent}
            name={name}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
            isChecked={selectValues.includes(option.value)}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;
