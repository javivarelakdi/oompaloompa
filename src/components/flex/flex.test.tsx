import React from "react";
import { render, screen } from "@testing-library/react";
import Flex from "./flex";

describe("Flex", () => {
  it("should properly render children", () => {
    const children = "This is the column content";

    render(
      <Flex
        columns={{
          "@bpMedium": 6,
        }}
      >
        {children}
      </Flex>
    );
    const instance = screen.getByText(children);

    expect(instance).toHaveTextContent(children);
  });

  it("should be defined", () => {
    const children = "This is the column content";

    render(
      <Flex
        columns={{
          "@bpMedium": 6,
        }}
      >
        {children}
      </Flex>
    );
    const instance = screen.getByText(children);

    expect(instance).toBeDefined();
  });

  it("should have the correct column styles", () => {
    const children = "This is the column content";

    render(
      <Flex
        columns={{
          "@bpMedium": 6,
        }}
      >
        {children}
      </Flex>
    );

    const instance = screen.getByText(children);
    expect(instance).toHaveAttribute(
      "class",
      expect.stringContaining("-columns-6")
    );
  });
});
