import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { StyledCard, Header, Description, Owner } from "./styles";

function FeatureCard({ title, owner, isNegative, image, about }) {
  return (
    <StyledCard $isNegative={isNegative}>
      <Header>
        <img src={image} width={56} height={56} className="featureCard" />
        <div>
          <Owner $isNegative={isNegative}>{owner}</Owner>
          <Title $size={TitleSize.EXTRA_SMALL} as="h3">
            {title}
          </Title>
        </div>
      </Header>
      <Description dangerouslySetInnerHTML={{ __html: about }} />
    </StyledCard>
  );
}

export default FeatureCard;
