import { fireEvent, render, screen } from "@testing-library/react"
import Product from "../product/Product";
import BuyButton from "./BuyButton"

describe("BuyButton component", () => {
    it("renders correct text", () => {
        const {getByRole} = render(<BuyButton/>);
        expect(getByRole("button").textContent).toMatch("Buy");
    })

    it("resets quantity to 1 on click", () => {
        render(<Product></Product>);
        const input = screen.getByLabelText("Quantity");
        fireEvent.change(input, {target: {value: "2"}});
        const button = screen.getByRole("button", {name: "Buy"});
        fireEvent.click(button);
        expect(input.value).toBe("1");
    })
})