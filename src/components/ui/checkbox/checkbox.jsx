import React from "react";
import VisuallyHiddenInput from "/src/components/styled/vissually-hidden-input";

function Checkbox({
  isChecked,
  onChange,
  onClick,
  name,
  value,
  text,
  labelComponent,
  ...props
}) {
  const LabelComponent = labelComponent;
  return (
    <label>
      <VisuallyHiddenInput
        type="checkbox"
        value="value"
        checked={isChecked}
        onChange={() => onChange(value)}
        name={name}
        {...props}
      />
      <LabelComponent $isChecked={isChecked} onClick={() => onClick(value)}>
        {text}
      </LabelComponent>
    </label>
  );
}

export default Checkbox;
