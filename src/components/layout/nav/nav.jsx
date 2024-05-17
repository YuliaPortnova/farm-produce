import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledNav } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

const links = [
  {
    to: AppRoute.MAIN,
    item: (
      <Button minWidth={260} link={AppRoute.MAIN}>
        Главная
      </Button>
    ),
  },
  {
    to: AppRoute.ORDER,
    item: (
      <Button minWidth={260} link={AppRoute.ORDER}>
        Купить
      </Button>
    ),
  },
];

function Nav() {
  const pageURL = useLocation().pathname;
  return (
    <StyledNav>
      {links.filter((link) => link.to != pageURL).map((link) => link.item)}
    </StyledNav>
  );
}

export default Nav;
