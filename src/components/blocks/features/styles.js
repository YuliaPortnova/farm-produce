import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const StyledFeatures = styled.section`
  padding: 100px 90px;
  text-align: center;
`;

export const FeaturesList = styled.ul`
  margin: 0 0 64px 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FeatureItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.backgroundColorPositive};
  text-align: left;
`;
