import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router";
import Cart from "./Cart"

describe("Cart component", () => {
    it("renders correct text: Cart", () => {
        render(
        <MemoryRouter>
        <Cart/>
        </MemoryRouter>
        );
        expect(screen.getByText("Cart")).toBeInTheDocument();
    })
})