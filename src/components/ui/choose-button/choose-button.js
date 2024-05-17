import styled from "styled-components";

export default ChooseButton = styled.button`
  cursor: pointer;
  display: block;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.backgroundColorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
