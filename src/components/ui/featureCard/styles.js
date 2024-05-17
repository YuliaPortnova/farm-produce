import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
  ${(props) => {
    if (props.$isNegative) {
      return css`
        background-color: ${(props) => props.theme.backgroundColorNegative};
      `;
    }
  }}
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 27px;
`;

export const Owner = styled.span`
  padding: 2px 10px;
  font-size: 14px;
  line-height: 21px;
  background-color: #88aa4d;
  color: #ffffff;
  ${(props) => {
    if (props.$isNegative) {
      return css`
        background-color: #f75531;
      `;
    }
  }}
`;
