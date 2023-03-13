import { fireEvent, render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product component", () => {
    it("returns correct number of list items", async () => {
        render(<Product title="Test Product" price="13.5"/>);
        const items = await screen.findAllByRole("listitem");
        expect(items).toHaveLength(4);
    }),

    it("updates quantity state on input", () => {
        render(<Product></Product>);
        const input = screen.getByLabelText("Quantity");
        fireEvent.change(input, {target: {value: "2"}});
        expect(input.value).toBe("2");
    })
})