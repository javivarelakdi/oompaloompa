import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const spacing = {
  tiny: "0.5rem",
  small: "1rem",
  medium: "2rem",
  big: "3rem",
  large: "4rem",
  huge: "6rem",
};

export const colors = {
  primary: "#1a281f",
  secondary: "#635255",
  third: "#ce7b91",
};

export const textStyles = {
  "heading-l": { fontWeight: "$medium", fontSize: "$h1" },
  "heading-m": { fontWeight: "$medium", fontSize: "$h2" },
  "heading-s1": { fontWeight: "$regular", fontSize: "$h3" },
  "heading-xs": { fontWeight: "$medium", fontSize: "$h4" },
  "heading-xxs": { fontWeight: "$medium", fontSize: "$h5" },
  "body-l": {
    fontWeight: "$regular",
    fontSize: "$body1",
  },
  "body-m": { fontWeight: "$regular", fontSize: "$body2" },
  "body-s": { fontWeight: "$regular", fontSize: "$sub1" },
};

export const { styled, globalCss, css, config } = createStitches({
  theme: {
    colors: { ...colors },
    space: { ...spacing },
    fontSizes: {
      h1: "3.1875rem",
      h2: "2rem",
      h3: "1.625rem",
      h4: "1.5rem",
      h5: "1.25rem",
      body1: "1rem",
      body2: "0.875rem",
      sub1: "0.75rem",
      sub2: "0.6875rem",
      sub3: "0.625rem",
    },
  },
  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 1007px) and (min-width: 641px)",
    bp3: "(min-width: 1008px)",
    bpExtraSmall: "(max-width: 599px)", //phone
    bpSmall: "(min-width: 600px) and (max-width:904px)", //tablet vertical
    bpMedium: "(min-width: 905px) and (max-width:1239px)", // tablet horizontal
    bpLarge: "(min-width: 1240px) and (max-width:1439px)", // laptop
    bpExtraLarge: "(min-width: 1440px)", //desktop
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ta: (value: Stitches.PropertyValue<"textAlign">) => ({
      textAlign: value,
    }),
    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({
      flexWrap: value,
    }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({
      alignSelf: value,
    }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({
      flexGrow: value,
    }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({
      flexBasis: value,
    }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({
      boxShadow: value,
    }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({
      overflowX: value,
    }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({
      overflowY: value,
    }),
    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    w: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
    }),
    h: (value: Stitches.PropertyValue<"height">) => ({
      height: value,
    }),
    truncate: (value: boolean) => {
      return value
        ? {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }
        : "";
    },
    textStyle: (value: keyof typeof textStyles) => textStyles[value],
  },
});

export const reset = {
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video":
    {
      margin: "0",
      padding: "0",
      border: "0",
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
    },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section":
    {
      display: "block",
    },
  "*[hidden]": {
    display: "none",
  },
  body: {
    lineHeight: "1",
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
  },
  table: {
    borderSpacing: "0",
  },
};

export const globalCssFunction = globalCss({
  ...reset,
  body: {
    fontFamily: "Inter, sans-serif",
    "& input, & button": {
      fontFamily: "inherit",
    },
  },
});

export type CSS = Stitches.CSS<typeof config>;
