import React from "react";
import { StyledPrice } from "./styles";

const formattedPrice = (value) => {
  const roundedPrice = Math.round(value);
  return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");
};

function Price({ value, marginBottom }) {
  return (
    <StyledPrice $marginBottom={marginBottom}>
      {formattedPrice(value)} руб.
    </StyledPrice>
  );
}

export default Price;
