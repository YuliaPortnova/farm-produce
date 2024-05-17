import React from "react";
import { ReactComponent as LogoImg } from "/src/assets/logo.svg";
import { StyledLogo, StyledLogoMainPage, Text } from "./styles.js";
import { AppRoute } from "/src/const.js";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return AppRoute.MAIN === pathname ? (
    <StyledLogoMainPage to={AppRoute.MAIN}>
      <LogoImg alt="Логотип." />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImg alt="Логотип." />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
