import styled from "styled-components";

export const StyledPrice = styled.p`
  margin: 0;
  margin-bottom: ${(props) => props.$marginBottom || 0}px;
  font-size: 24px;
  font-weight: bold;
`;
