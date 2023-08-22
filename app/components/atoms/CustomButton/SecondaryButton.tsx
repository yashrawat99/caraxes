import React from "react";
import styled from "styled-components";
import { CustomButtonProps } from "./CustomButton.types";
import { BaseCustomButton } from "./style";
const SecondaryButton = ({
  onClick,
  label,
  className,
  disabled,
}: CustomButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default SecondaryButton;

const StyledButton = styled(BaseCustomButton)`
  background-color: #fff;
  border: 1px solid #080;
  color: #080;
  &[disabled] {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    border: 1px solid #ccc;
  }
`;
