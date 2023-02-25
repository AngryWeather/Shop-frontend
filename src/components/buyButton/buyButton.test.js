import { render } from "@testing-library/react"
import BuyButton from "./BuyButton"

describe("BuyButton component", () => {
    it("renders correct text", () => {
        const {getByRole} = render(<BuyButton/>);
        expect(getByRole("button").textContent).toMatch("Buy");
    })
})