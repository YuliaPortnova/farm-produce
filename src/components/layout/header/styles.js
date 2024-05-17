import styled from "styled-components";

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 40px;
  padding: 10px 90px;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;
