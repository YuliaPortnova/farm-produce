import React, { useState } from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Panel from "/src/components/ui/panel/panel";
import { StyledForm, CheckboxLabel, AddressInput, PriceText } from "./styles";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import Price from "/src/components/ui/price/price";
import Button from "/src/components/ui/button/button";

function Form({
  products,
  selectProductIds,
  setSelectProductIds,
  onClickLabel,
}) {
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const [address, setAddress] = useState("");

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts
      .map((product) => `${product.name} - ${product.price} руб.`)
      .join("\n")}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return (
    <StyledForm action="">
      <Panel>
        <Title as="h3" $size={TitleSize.EXTRA_SMALL} $marginBottom="20">
          Выберите продукты
        </Title>
        <CheckboxList
          labelComponent={CheckboxLabel}
          name={"select-products"}
          options={products.map((product) => ({
            value: product.id,
            title: product.name,
          }))}
          selectValues={selectProductIds}
          onChange={setSelectProductIds}
          onClickLabel={onClickLabel}
        />
      </Panel>
      <Panel>
        <Title as="h3" $size={TitleSize.EXTRA_SMALL} $marginBottom="18">
          Сделать заказ
        </Title>
        <AddressInput
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          name="address"
          type="text"
          placeholder="Введите адрес доставки"
        />
        <PriceText>Цена</PriceText>
        <Price value={fullPrice} marginBottom="20" />
        <Button
          minWidth="380"
          onClick={handleBuyClick}
          disabled={!(selectProductIds.length && address)}
        >
          Купить
        </Button>
      </Panel>
    </StyledForm>
  );
}

export default Form;
