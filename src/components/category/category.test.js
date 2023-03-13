import Category from "./Category"
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Category component", () => {
    it("renders category name: electronics", () => {
        const {getByRole} = render(
        <MemoryRouter>
            <Category category="electronics"/>
        </MemoryRouter>
        );
        expect(getByRole("listitem").textContent).toBe("electronics");
    }),

    it("renders category name: jewelery", () => {
        const {getByRole} = render(
        <MemoryRouter>
            <Category category="jewelery"/>
        </MemoryRouter>
            );
        expect(getByRole("listitem").textContent).toBe("jewelery");
    }),

    it("anchor has correct href attribute", () => {
        const {getByRole} = render(
        <MemoryRouter>
            <Category category="electronics"/>
        </MemoryRouter>
        );
        expect(getByRole("link")).toHaveAttribute("href", "/electronics");
    })
})