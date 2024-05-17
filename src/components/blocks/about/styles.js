import styled from "styled-components";
import aboutImage from "/src/assets/about.svg";

export const StyledAbout = styled.div`
  display: grid;
  gap: 24px;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  min-height: 600px;
  padding: 183px 660px 183px 90px;
  box-sizing: border-box;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 446px;
    height: 446px;
    border-radius: 50%;
    background-color: #c4e2ff;
    top: 76px;
    right: 90px;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 273px;
    height: 627px;
    top: 37px;
    right: 177px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${aboutImage});
  }
`;
