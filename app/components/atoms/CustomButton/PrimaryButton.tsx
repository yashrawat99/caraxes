import React from "react";
import styled from "styled-components";
import { CustomButtonProps } from "./CustomButton.types";
import { BaseCustomButton } from "./style";

const StyledButton = styled(BaseCustomButton)`
  background-color: #008800;
  color: #fff;

  &[disabled] {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

const PrimaryButton = ({
  onClick,
  label,
  className,
  disabled,
}: CustomButtonProps) => {
  return (
    <StyledButton onClick={onClick} className={className} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default PrimaryButton;
