import styled from "styled-components";

export const Panel = styled.div`
  padding: ${(props) => props.theme.indent};
  padding-top: ${(props) => `${props.paddingTop}px` || props.theme.indent};
  padding-bottom: ${(props) =>
    `${props.paddingBottom}px` || props.theme.indent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  margin-bottom: ${(props) => props.$marginBottom || 0}px;
  width: ${(props) => props.$width || "auto"};
  display: block;
  background-color: ${(props) => props.theme.colorWhite};
`;

export default Panel;
