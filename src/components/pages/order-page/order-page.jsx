import React, { useState } from "react";
import { StyledOrderPage } from "./styles";
import Form from "/src/components/blocks/form/form";
import Slider from "/src/components/blocks/slider/slider";

function OrderPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  return products && products.length ? (
    <StyledOrderPage>
      <Form
        products={products}
        selectProductIds={selectProductIds}
        setSelectProductIds={setSelectProductIds}
        onClickLabel={handleOnClickProduct}
      />
      <Slider products={products} setSwiperRef={setSwiperRef} />
    </StyledOrderPage>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default OrderPage;
