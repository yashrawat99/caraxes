export interface CustomButtonProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "solid" | "outlined";
  disabled?: boolean;
}
