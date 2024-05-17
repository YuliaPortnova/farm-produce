import styled from "styled-components";

export const Text = styled.p`
  margin: 0 0 14px 0;
  padding: 0;
`;

export const Price = styled.span`
  display: block;
  padding: 4px 8px;
  font-weight: bold;
  background-color: ${(props) => props.theme.backgroundColorBlue};
`;
