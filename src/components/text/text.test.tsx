import React from "react";
import { render, screen } from "@testing-library/react";
import Text, { TextProps } from "./text";

describe("Text", () => {
	it("should properly render children", () => {
		const props = { textStyle: "heading-l" } as TextProps;
		const text = "This is some text";

		render(<Text {...props}>{text}</Text>);
		const instance = screen.getByText(text);

		expect(instance).toHaveTextContent(text);
	});

	it("should be defined", () => {
		const props = { textStyle: "heading-s1" } as TextProps;
		const text = "This is some text";

		render(<Text {...props}>{text}</Text>);
		const instance = screen.getByText(text);

		expect(instance).toBeDefined();
	});
});
