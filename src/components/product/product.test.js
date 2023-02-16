import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product component", () => {
    it("returns correct number of list items", async () => {
        render(<Product title="Test Product" price="13.5"/>);
        const items = await screen.findAllByRole("listitem");
        expect(items).toHaveLength(4);
    })
})