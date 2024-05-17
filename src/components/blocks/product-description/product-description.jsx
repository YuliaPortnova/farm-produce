import React from "react";
import { Price, Text } from "./styles";

function ProductDescription({ description, price, weight }) {
  return (
    <>
      <Text>{description}</Text>
      <Price>
        {price} руб. / {weight} гр.
      </Price>
    </>
  );
}

export default ProductDescription;
