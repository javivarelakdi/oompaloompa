import { styled, CSS, spacing } from "../../stitches.config";
import type * as Stitches from "@stitches/react";

const StyledFlex = styled("div", {
  boxSizing: "border-box",
  display: "flex",

  variants: {
    columns: {
      "1": {
        flex: `0 0 ${100 / 12}%`,
        maxWidth: `${100 / 12}%`,
      },
      "2": {
        flex: `0 0 ${(2 * 100) / 12}%`,
        maxWidth: `${(2 * 100) / 12}%`,
      },
      "3": {
        flex: `0 0 ${(3 * 100) / 12}%`,
        maxWidth: `${(3 * 100) / 12}%`,
      },
      "4": {
        flex: `0 0 ${(4 * 100) / 12}%`,
        maxWidth: `${(4 * 100) / 12}%`,
      },
      "5": {
        flex: `0 0 ${(5 * 100) / 12}%`,
        maxWidth: `${(5 * 100) / 12}%`,
      },
      "6": {
        flex: `0 0 ${(6 * 100) / 12}%`,
        maxWidth: `${(6 * 100) / 12}%`,
      },
      "7": {
        flex: `0 0 ${(7 * 100) / 12}%`,
        maxWidth: `${(7 * 100) / 12}%`,
      },
      "8": {
        flex: `0 0 ${(8 * 100) / 12}%`,
        maxWidth: `${(8 * 100) / 12}%`,
      },
      "9": {
        flex: `0 0 ${(9 * 100) / 12}%`,
        maxWidth: `${(9 * 100) / 12}%`,
      },
      "10": {
        flex: `0 0 ${(10 * 100) / 12}%`,
        maxWidth: `${(10 * 100) / 12}%`,
      },
      "11": {
        flex: `0 0 ${(11 * 100) / 12}%`,
        maxWidth: `${(11 * 100) / 12}%`,
      },
      "12": {
        flex: `0 0 ${(12 * 100) / 12}%`,
        maxWidth: `${(12 * 100) / 12}%`,
      },
    },
    offset: {
      "1": {
        marginLeft: `${(1 * 100) / 12}%`,
      },
      "2": {
        marginLeft: `${(2 * 100) / 12}%`,
      },
      "3": {
        marginLeft: `${(3 * 100) / 12}%`,
      },
      "4": {
        marginLeft: `${(4 * 100) / 12}%`,
      },
      "5": {
        marginLeft: `${(5 * 100) / 12}%`,
      },
      "6": {
        marginLeft: `${(6 * 100) / 12}%`,
      },
      "7": {
        marginLeft: `${(7 * 100) / 12}%`,
      },
      "8": {
        marginLeft: `${(8 * 100) / 12}%`,
      },
      "9": {
        marginLeft: `${(9 * 100) / 12}%`,
      },
      "10": {
        marginLeft: `${(10 * 100) / 12}%`,
      },
      "11": {
        marginLeft: `${(11 * 100) / 12}%`,
      },
      "12": {
        marginLeft: `${(12 * 100) / 12}%`,
      },
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    size: {
      auto: {
        width: "auto",
      },
      sm: {
        width: "50%",
      },
      lg: {
        width: "100%",
      },
    },
    gap: Object.keys(spacing).reduce(
      (acc, eachKey) => ({
        ...acc,
        [eachKey]: { gap: (spacing as any)[eachKey] },
      }),
      {}
    ) as Record<keyof typeof spacing, CSS>,
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap",
  },
});

export default StyledFlex;

export type StyledFlexVariants = Stitches.VariantProps<typeof StyledFlex>;
