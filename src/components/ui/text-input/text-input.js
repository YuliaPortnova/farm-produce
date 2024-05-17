import styled from "styled-components";

export const TextInput = styled.input`
  display: flex;

  width: 100%;
  background-color: ${(props) => props.theme.backgroundColorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 12px;
  font-size: 14px;

  ::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
  }
`;

export default TextInput;
