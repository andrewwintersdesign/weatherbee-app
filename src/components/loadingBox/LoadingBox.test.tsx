import { render, screen } from "@testing-library/react";
import LoadingBox from "./LoadingBox";

it("renders loading box", () => {
  render(
    <LoadingBox loading={true} width={100} height={100} opacity={1}>
      <p>test</p>
    </LoadingBox>
  );
  const element = screen.getByTestId("loading");
  expect(element.innerHTML).toBe(
    `<div class="shimmer MuiBox-root css-17yie8o"></div>`
  );
});

it("renders loading children", () => {
  render(
    <LoadingBox
      data-testid="loading"
      loading={false}
      width={100}
      height={100}
      opacity={1}
    >
      <p>test</p>
    </LoadingBox>
  );
  const element = screen.getByText("test");
  expect(element.outerHTML).toBe("<p>test</p>");
});
