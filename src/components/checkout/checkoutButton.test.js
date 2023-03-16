import { render } from "@testing-library/react";
import CheckoutButton from "./CheckoutButton";

describe("CheckoutButton component", () => {

    it("renders text: Checkout (1 item)", () => {
        const {getByRole} = render(<CheckoutButton length="1"></CheckoutButton>);
        const button = getByRole("button");
        expect(button).toHaveTextContent("Checkout (1 item)");
    }),

    it("renders text: Checkout (6 items)", () => {
        const {getByRole} = render(<CheckoutButton length="6"></CheckoutButton>);
        const button = getByRole("button");
        expect(button).toHaveTextContent("Checkout (6 items)");
    })


})