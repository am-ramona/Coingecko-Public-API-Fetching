import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CryptoExchangeDetails from "../views/cryptoExchangeDetails";
import { getExchangeById } from "../network/apis";

jest.mock("../network/apis", () => ({
  getExchangeById: jest.fn(),
}));

const mockedGetExchangeById = jest.mocked(getExchangeById);

const mockExchangeDetails = {
  name: "Coinbase Exchange",
  country: "United States",
  trust_score_rank: 1,
  image: "https://example.com/coinbase.png",
  year_established: 2012,
  description: "A cryptocurrency exchange.",
  facebook_url: "https://facebook.com/coinbase",
  reddit_url: "https://reddit.com/r/Coinbase",
  telegram_url: "https://t.me/coinbase",
  slack_url: "",
  other_url_1: "https://coinbase.com",
  other_url_2: "",
  twitter_handle: "coinbase",
};

const renderDetailsPage = (id = "gdax") => {
  return render(
    <MemoryRouter initialEntries={["/", `/exchanges/${id}`]}>
      <Routes>
        <Route
          path="/"
          element={<div>Main Page</div>}
        />
        <Route
          path="/exchanges/:id"
          element={<CryptoExchangeDetails />}
        />
      </Routes>
    </MemoryRouter>
  );
};

describe("CryptoExchangeDetails", () => {
  beforeEach(() => {
    mockedGetExchangeById.mockResolvedValue(mockExchangeDetails);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("displays a loading state while fetching exchange details", () => {
    mockedGetExchangeById.mockReturnValue(
      new Promise(() => undefined)
    );

    renderDetailsPage();

    expect(screen.getByText("Loading ...")).toBeInTheDocument();
  });

  test("fetches and renders exchange details", async () => {
    renderDetailsPage();

    expect(mockedGetExchangeById).toHaveBeenCalledWith("gdax");

    expect(
      await screen.findByText(/Exchange details/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/name: Coinbase Exchange/i)).toBeInTheDocument();
    expect(screen.getByText(/Country: United States/i)).toBeInTheDocument();
    expect(screen.getByText(/Trust rank: 1/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Year of establishment: 2012/i)
    ).toBeInTheDocument();
  });

  test("renders the exchange logo", async () => {
    renderDetailsPage();

    const logo = await screen.findByAltText("Coinbase Exchange");

    expect(logo).toHaveAttribute(
      "src",
      "https://example.com/coinbase.png"
    );
  });

  test("renders available social media links", async () => {
    renderDetailsPage();

    expect(await screen.findByRole("link", { name: "Facebook" }))
      .toHaveAttribute("href", "https://facebook.com/coinbase");

    expect(screen.getByRole("link", { name: "Reddit" }))
      .toHaveAttribute("href", "https://reddit.com/r/Coinbase");

    expect(screen.getByRole("link", { name: "Telegram" }))
      .toHaveAttribute("href", "https://t.me/coinbase");

    expect(screen.getByRole("link", { name: "Twitter Handle" }))
      .toHaveAttribute("href", "http://twitter.com/coinbase");
  });

  test("does not render social media links when their URLs are empty", async () => {
    renderDetailsPage();

    await screen.findByText(/Coinbase Exchange/i);

    expect(screen.queryByRole("link", { name: "Slack" })).not.toBeInTheDocument();
  });

  test("displays not available when the description is empty", async () => {
    mockedGetExchangeById.mockResolvedValue({
      ...mockExchangeDetails,
      description: "",
    });

    renderDetailsPage();

    expect(
  await screen.findByText(/Description:\s*not available/i)
).toBeInTheDocument();
  });

test("navigates back to the main page when the Back button is clicked", async () => {
  const user = userEvent.setup();

  renderDetailsPage();

  const backButton = await screen.findByRole("button", { name: "Back" });

  await user.click(backButton);

  expect(await screen.findByText("Main Page")).toBeInTheDocument();
});
});
