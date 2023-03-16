import { findByRole, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
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

    it("checks if products are empty on checkout button click", () => {
        const setProducts = jest.fn();
        const {getByText} = render(<CheckoutButton length="6" resetProducts={setProducts}></CheckoutButton>);
        const button = getByText("Checkout (6 items)");
        fireEvent.click(button);
        expect(setProducts).toHaveBeenCalledWith([]);
    })
})