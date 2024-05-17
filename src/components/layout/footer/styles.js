import styled from "styled-components";

export const StyledFooter = styled.div`
  width: ${(props) => props.theme.pageWidth};
  display: grid;
  grid-template-columns: 1fr 122px;
  gap: 40px;
  padding: 17px 90px 18px 86px;
  margin: auto auto 0 auto;
  background-color: #ffffff;

  border-top: 1px solid rgba(0, 0, 0, 0.102);
`;

export const Copyright = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
`;
