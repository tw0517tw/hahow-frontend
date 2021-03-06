import styled, { css } from "styled-components";
import { ComponentPropsWithoutRef, FC } from "react";

type StyledButtonProps = {
  fontSize?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  padding: 0 4px;

  font-size: ${(props) => props.fontSize};

  ${(props) => {
    if (props.disabled)
      return css`
        cursor: not-allowed;
      `;
  }}
`;

type ButtonProps = ComponentPropsWithoutRef<"button"> & StyledButtonProps;

const Button: FC<ButtonProps> = ({ children, fontSize = "16px", ...props }) => {
  return (
    <StyledButton fontSize={fontSize} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
