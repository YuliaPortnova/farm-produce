import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  
  body {
    height: 100%;
    margin: 0;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeigthDefault};
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
  }

  #root {
    display: flex;
    position: relative;
    min-height: 100%;
    flex-direction: column;
  }
`;
