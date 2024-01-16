import React, { forwardRef } from "react";
import StyledFlex, { StyledFlexVariants } from "./flex.styled";
import { CSS } from "../../stitches.config";

type cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface FlexProps {
  columns?:
    | {
        "@bpExtraSmall"?: cols;
        "@bpSmall"?: cols;
        "@bpMedium"?: cols;
        "@bpLarge"?: cols;
        "@bpExtraLarge"?: cols;
      }
    | string;
  offset?:
    | {
        "@bpExtraSmall"?: cols;
        "@bpSmall"?: cols;
        "@bpMedium"?: cols;
        "@bpLarge"?: cols;
        "@bpExtraLarge"?: cols;
      }
    | string;
  css?: CSS;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOut?: React.MouseEventHandler<HTMLDivElement>;
  ref?: React.RefObject<HTMLDivElement>;
}
type Props = FlexProps &
  Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children"> &
  StyledFlexVariants;

/**
 * Flex is a main Layout component used to create row and column components.
 * You can easily create a 12-column grid with the Flex components
 */
const Flex = forwardRef<HTMLDivElement, Props>(
  ({ children, columns, offset, ...rest }, ref) => {
    let orderedColumns: { [key: string]: number } = {};
    let orderedOffset: { [key: string]: number } = {};

    if (columns) {
      orderedColumns = {
        "@bpExtraSmall": (columns as any)["@bpExtraSmall"] || 12,
        "@bpSmall":
          (columns as any)["@bpSmall"] ||
          (columns as any)["@bpExtraSmall"] ||
          12,
        "@bpMedium":
          (columns as any)["@bpMedium"] ||
          (columns as any)["@bpSmall"] ||
          (columns as any)["@bpExtraSmall"] ||
          12,
        "@bpLarge":
          (columns as any)["@bpLarge"] ||
          (columns as any)["@bpMedium"] ||
          (columns as any)["@bpSmall"] ||
          (columns as any)["@bpExtraSmall"] ||
          12,
        "@bpExtraLarge":
          (columns as any)["@bpExtraLarge"] ||
          (columns as any)["@bpLarge"] ||
          (columns as any)["@bpMedium"] ||
          (columns as any)["@bpSmall"] ||
          (columns as any)["@bpExtraSmall"] ||
          12,
      };
    }

    if (offset) {
      orderedOffset = {
        "@bpExtraSmall": (offset as any)["@bpExtraSmall"] || 0,
        "@bpSmall":
          (offset as any)["@bpSmall"] || (offset as any)["@bpExtraSmall"] || 0,
        "@bpMedium":
          (offset as any)["@bpMedium"] ||
          (offset as any)["@bpSmall"] ||
          (offset as any)["@bpExtraSmall"] ||
          0,
        "@bpLarge":
          (offset as any)["@bpLarge"] ||
          (offset as any)["@bpMedium"] ||
          (offset as any)["@bpSmall"] ||
          (offset as any)["@bpExtraSmall"] ||
          0,
        "@bpExtraLarge":
          (offset as any)["@bpExtraLarge"] ||
          (offset as any)["@bpLarge"] ||
          (offset as any)["@bpMedium"] ||
          (offset as any)["@bpSmall"] ||
          (offset as any)["@bpExtraSmall"] ||
          0,
      };
    }

    return (
      <StyledFlex
        ref={ref}
        columns={orderedColumns}
        offset={orderedOffset}
        {...rest}
      >
        {children}
      </StyledFlex>
    );
  }
);

export default Flex;
