import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import App from "@/components/app";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(
      screen.getByText("pages.home.title", { exact: false }),
    ).toBeInTheDocument();
  });

  it("renders with correct class names", () => {
    render(<App />);
    const divElement = screen.getByRole("heading", { level: 1 });
    expect(divElement).toHaveClass("text-4xl font-bold text-blue-500");
  });
});
