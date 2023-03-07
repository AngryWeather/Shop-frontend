import { render, screen } from "@testing-library/react"
import Cart from "./Cart"

describe("Cart component", () => {
    it("renders correct text: Cart", () => {
        render(<Cart/>);
        expect(screen.getByText("Cart")).toBeInTheDocument();
    })
})