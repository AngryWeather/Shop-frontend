import Category from "./Category"
import { render } from "@testing-library/react";

describe("Category component", () => {
    it("renders category name: electronics", () => {
        const {getByRole} = render(<Category category="electronics"/>);
        expect(getByRole("listitem").textContent).toBe("electronics");
    }),

    it("renders category name: jewelery", () => {
        const {getByRole} = render(<Category category="jewelery"/>);
        expect(getByRole("listitem").textContent).toBe("jewelery");
    }),

    it("anchor has correct href attribute", () => {
        const {getByRole} = render(<Category category="electronics"/>);
        expect(getByRole("link")).toHaveAttribute("href", "/electronics");
    })
})