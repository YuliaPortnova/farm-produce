import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  margin-top: 8px;
  text-decoration: none;
  display: flex;
  gap: 24px;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const Text = styled.span`
  margin-top: 6px;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  color: #333333;
`;
