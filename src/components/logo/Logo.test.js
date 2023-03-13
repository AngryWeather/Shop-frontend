import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Logo from "./Logo";

describe("Logo component", () => {
    it("renders correct heading", () => {
        const {getByRole} = render(
        <MemoryRouter>
            <Logo />
        </MemoryRouter>
        );
        expect(getByRole("heading").textContent).toMatch("Store");
    });
});