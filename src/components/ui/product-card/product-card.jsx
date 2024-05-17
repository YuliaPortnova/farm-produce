import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { ProductPanel, Image } from "./styles";
import Tabs from "/src/components/ui/tabs/tabs";
import OptionsList from "/src/components/ui/options-list/options-list";
import ProductDescription from "/src/components/blocks/product-description/product-description";

function ProductCard({ product }) {
  const tabsList = [
    {
      title: "Описание",
      content: (
        <ProductDescription
          description={product.description}
          price={product.price}
          weight={product.weight}
        />
      ),
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />,
    },
  ];
  return (
    <ProductPanel>
      <Image src={product.image} />
      <div>
        <Title $size={TitleSize.SMALL} as="h3" $marginBottom={16}>
          {product.name}
        </Title>
        <Tabs tabsList={tabsList} />
      </div>
    </ProductPanel>
  );
}

export default ProductCard;
