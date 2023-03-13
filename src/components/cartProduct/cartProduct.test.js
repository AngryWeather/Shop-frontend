import { getByText, render, screen } from "@testing-library/react"
import CartProduct from "./CartProduct"

describe("CartProduct component", () => {
    
    it("renders Quantity: 2", () => {
        render(<CartProduct quantity="2"></CartProduct>)
        expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    }),

    it("renders Quantity: 0", () => {
        render(<CartProduct quantity="0"></CartProduct>)
        expect(screen.getByText("Quantity: 0")).toBeInTheDocument();
    })

    it("renders To pay: 28$", () => {
        render(<CartProduct quantity="2" price="14"></CartProduct>)
        expect(screen.getByText("To pay: 28$")).toBeInTheDocument();
    })

    it("renders To pay: 0$", () => {
        render(<CartProduct quantity="0" price="99"></CartProduct>)
        expect(screen.getByText("To pay: 0$")).toBeInTheDocument();
    })
})