import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import { act, fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import LocationSearch from "./LocationSearch";

export const handlers = [
  rest.get(
    `https://geocoding-api.open-meteo.com/v1/search`,
    async (req, res, ctx) => {
      const name = "Auck";
      const count = "8";
      //not reaching here
      console.log('here')
      req.url.searchParams.append("name", name);
      req.url.searchParams.append("count", count);
      const originalResponse = await ctx.fetch(req).then(() => {
        return [
          {
            id: 2193733,
            name: "Auckland",
            latitude: -36.84853,
            longitude: 174.76349,
            elevation: 43,
            feature_code: "PPLA",
            country_code: "NZ",
            admin1_id: 2193734,
            admin2_id: 2193732,
            timezone: "Pacific/Auckland",
            population: 417910,
            country_id: 2186224,
            country: "New Zealand",
            admin1: "Auckland",
            admin2: "Auckland",
          },
        ];
      });
      return res(ctx.status(200), ctx.json(originalResponse), 
      ctx.delay(300));
    }
  ),
];
const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest: "warn",
  })
);

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("behaviour", () => {
  it("should call api on input type", async () => {
    const view = renderWithProviders(<LocationSearch />);
    const input = screen.getByLabelText("Search Locations");

    expect(input).toBeInTheDocument();

    jest.useFakeTimers("modern");
    userEvent.clear(input);
    fireEvent.focus(input);
    userEvent.paste("Auck");
    act(() => {
      jest.runAllTimers();
    });
    expect(await input).toHaveValue("Auck");
    expect(await view.store.getState().location.status).toContain("loading");
  });
});
