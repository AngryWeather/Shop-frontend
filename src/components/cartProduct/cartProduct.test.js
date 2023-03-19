import { fireEvent, getByText, render, screen } from "@testing-library/react"
import CartProduct from "./CartProduct"

describe("CartProduct component", () => {
    
    it("renders Quantity: 2", () => {
        render(<CartProduct quantity="2"></CartProduct>)
        const input = screen.getByLabelText("Quantity");
        fireEvent.change(input, {target: {value: "3"}});
        expect(input.value).toBe("3");
    }),

    it("renders Quantity: 0", () => {
        render(<CartProduct quantity="1"></CartProduct>)
        const input = screen.getByLabelText("Quantity");
        fireEvent.change(input, {target: {value: "2"}});
        expect(input.value).toBe("2");
    })

    it("renders To pay: 28$", () => {
        render(<CartProduct quantity="2" price="14"></CartProduct>)
        expect(screen.getByText("To pay: 28.00$")).toBeInTheDocument();
    })

    it("renders To pay: 0$", () => {
        render(<CartProduct quantity="0" price="99"></CartProduct>)
        expect(screen.getByText("To pay: 0.00$")).toBeInTheDocument();
    })
})