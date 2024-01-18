import { ComponentPropsWithoutRef } from "react";
import { CSS, styled } from "../../stitches.config";

const StyledButton = styled("button", {
  backgroundColor: "$third",
  borderRadius: "100px",
  border: "none",
  color: "#fff",
  padding: "12px",
  fontWeight: "$bolder",
  fontSize: "$body1",
  textTransform: "uppercase",
});

export type ButtonProps = {
  css?: CSS;
} & ComponentPropsWithoutRef<typeof StyledButton>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} css={{ ...props.css }}>
      {children}
    </StyledButton>
  );
};

Button.toString = StyledButton.toString.bind(StyledButton);

export default Button;
