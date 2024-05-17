import styled from "styled-components";
import Panel from "/src/components/ui/panel/panel";

export const ProductPanel = styled(Panel)`
  display: grid;
  grid-template-columns: 248px 1fr;
  gap: 20px;
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 248px;
`;
