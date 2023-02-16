import { render } from "@testing-library/react";
import Product from "./Product";

describe("Product component", () => {
    it("renders title", () => {
        const {getByRole} = render(<Product title="Test Product"/>)
        expect(getByRole("listitem").textContent).toBe("Test Product");
    })
})