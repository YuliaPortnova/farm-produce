import styled, { css } from "styled-components";
import {ChooseButton} from "/src/components/ui/choose-button/choose-button";

export const TabButton = styled(ChooseButton)`
  ${(props) =>
    props.$isSelect &&
    css`
      background-color: ${props.theme.colorGreen};
      color: ${props.theme.colorWhite};
    `}
`;

export const TabList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const TabListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 21px;
`;
