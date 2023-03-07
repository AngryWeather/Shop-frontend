import { render } from "@testing-library/react"
import Cart from "./Cart"

describe("Cart component", () => {
    it("renders correct text: Cart", () => {
        const{getByRole} = render(<Cart></Cart>)
        expect(getByRole("paragraph").textContent).toBe("Cart");
    })
})