import React, { useMemo } from "react";
import { CustomButtonProps } from "./CustomButton.types";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const CustomButton = ({
  className,
  label = "Custom Button",
  onClick,
  variant = "solid",
  disabled = false,
}: CustomButtonProps) => {
  const MemoizedCustomButton = useMemo(() => {
    switch (variant) {
      case "solid":
        return (
          <PrimaryButton
            variant={variant}
            onClick={onClick}
            className={className}
            label={label}
            disabled={disabled}
          />
        );
      case "outlined":
        return (
          <SecondaryButton
            variant={variant}
            onClick={onClick}
            className={className}
            label={label}
            disabled={disabled}
          />
        );
      default:
        return (
          <button onClick={onClick} className={className}>
            {label}
          </button>
        );
    }
  }, [disabled]);
  return MemoizedCustomButton;
};

export default CustomButton;
