import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo component", () => {
    it("renders correct heading", () => {
        const {getByRole} = render(<Logo />);
        expect(getByRole("heading").textContent).toMatch("Store");
    });
});