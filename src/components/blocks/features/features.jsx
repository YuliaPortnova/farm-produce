import React from "react";
import Button from "../../ui/button/button";
import FeatureCard from "../../ui/featureCard/featureCard";
import Title from "/src/components/ui/title/title";
import { AppRoute } from "/src/const";

import {
  StyledFeatures,
  FeaturesList,
  FeatureItem,
  FeaturesTitle,
} from "./styles";

function Features({ features }) {
  return (
    <StyledFeatures>
      {features?.length ? (
        <>
          <Title as="h2" $marginBottom="64">
            Почему фермерские продукты лучше?
          </Title>
          <FeaturesList>
            {features.map((feature) => (
              <FeatureItem key={feature.id}>
                <FeatureCard {...feature} />
              </FeatureItem>
            ))}
          </FeaturesList>
          <Button link={AppRoute.ORDER} minWidth={260}>
            Купить
          </Button>
        </>
      ) : null}
    </StyledFeatures>
  );
}

export default Features;
