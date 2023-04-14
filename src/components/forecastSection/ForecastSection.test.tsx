import { render, screen } from "@testing-library/react";
import ForecastSection from "./ForecastSection";

describe("render", () => {
  it("should display correct headerComponent", () => {
  render(
      <ForecastSection header="This is a header" headerComponent="h6">
        <p>hello</p>
      </ForecastSection>
    );

    const header = screen.getByText('This is a header')
    expect(header).toBeInTheDocument()
    expect(header.outerHTML).toContain('h6');
  });
  it("should display correct headerElement with no prop", () => {
    render(
        <ForecastSection header="This is a header" >
          <p>hello</p>
        </ForecastSection>
      );
  
      const header = screen.getByText('This is a header')
      expect(header).toBeInTheDocument()
      expect(header.outerHTML).toContain('subtitle1');
    });
});
