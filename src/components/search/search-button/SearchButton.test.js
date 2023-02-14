import { render } from "@testing-library/react";
import SearchButton from "./SearchButton";

describe ("SearchButton component", () => {
    it ("renders correct text", () => {
        const {getByRole} = render(<SearchButton/>);
        expect(getByRole("button").textContent).toMatch("Search");
    })
})