import React, { ComponentPropsWithoutRef } from "react";
import { CSS, styled, textStyles, colors } from "../../stitches.config";

export function getColorVariants(
  cssKey: string
): Record<keyof typeof colors, CSS> {
  return Object.keys(colors).reduce((acc, eachColor) => {
    return {
      ...acc,
      [eachColor]: { [cssKey]: (colors as any)[eachColor].computedValue },
    };
  }, {}) as Record<keyof typeof colors, CSS>;
}

export function getTextStylesVariants(): Record<keyof typeof textStyles, CSS> {
  return Object.keys(textStyles).reduce((acc, eachTextStyle) => {
    return {
      ...acc,
      [eachTextStyle]: { ...(textStyles as any)[eachTextStyle] },
    };
  }, {}) as Record<keyof typeof textStyles, CSS>;
}

const StyledText = styled("span", {
  variants: {
    color: getColorVariants("color"),
    textStyle: getTextStylesVariants(),
  },
});

export type TextProps = {
  textStyle?: keyof typeof textStyles;
  color?: keyof typeof colors;
  css?: CSS;
} & ComponentPropsWithoutRef<typeof StyledText>;

const Text = ({ textStyle, children, color, ...props }: TextProps) => {
  return (
    <StyledText
      {...props}
      textStyle={textStyle}
      color={color}
      css={{ ...props.css }}
    >
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  color: "primary",
};

Text.toString = StyledText.toString.bind(StyledText);

export default Text;
