import { render, screen } from "@testing-library/react"
import RemoveButton from "./RemoveButton";

describe("RemoveButton", () => {
    it("Renders X inside the button", () => {
        render(<RemoveButton></RemoveButton>);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("X");
    })
})