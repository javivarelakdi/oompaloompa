import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
	it("should properly render children", () => {
		const text = "This is some Button";

		render(<Button>{text}</Button>);
		const instance = screen.queryByText(text);

		expect(instance).toHaveTextContent(text);
	});

	it("should be defined", () => {
		const text = "This is some Button";

		render(<Button>{text}</Button>);
		const instance = screen.getByText(text);

		expect(instance).toBeDefined();
	});
});
