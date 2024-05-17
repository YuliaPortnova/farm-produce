import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  box-sizing: border-box;
  display: inline-flex;
  padding: 16px;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-heigth: ${(props) => props.theme.lineHeigthDefault};
  font-weight: 700;
  justify-content: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  border: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.24);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export default StyledButton;
