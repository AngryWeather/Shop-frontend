import { render, screen } from "@testing-library/react"
import ErrorMessage from "./ErrorMessage";

describe("Error message", () => {
    it("renders given error message", () => {
        render(
          <ErrorMessage value="You can't buy 0 items!"></ErrorMessage>
        );
        expect(screen.getByText("You can't buy 0 items!")).toBeInTheDocument();
    })
})