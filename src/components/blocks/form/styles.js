import styled, { css } from "styled-components";
import checkboxSelect from "/src/assets/checkbox.svg";
import TextInput from "/src/components/ui/text-input/text-input";

export const StyledForm = styled.form`
  display: grid;
  gap: 18px;
  align-content: start;
`;

export const AddressInput = styled(TextInput)`
  width: 100%;
  margin-bottom: 20px;
`;

export const PriceText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: flex-start;
  cursor: pointer;
  padding-right: 40px;

  &::after {
    content: "";
    right: 0;
    top: 3px;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`;
