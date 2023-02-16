import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product component", () => {
    it("returns correct number of list items", async () => {
        render(<Product title="Test Product" price="13.5"/>);
        const items = await screen.findAllByRole("listitem");
        expect(items).toHaveLength(4);
    })

    // it("renders title", () => {
    //     const {getByRole} = render(<Product title="Test Product"/>);
    //     expect(getByRole("listitem").textContent).toBe("Test Product");
    // }),

    // it("renders price", () => {
    //     const {getByRole} = render(<Product price="13.5"/>);
    //     expect(getByRole("listitem").textContent).toBe("13.5");
    // })
})