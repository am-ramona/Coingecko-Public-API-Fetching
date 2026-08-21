import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Directory from "../views/directory";
import { getExchanges } from "../network/apis";

jest.mock("../network/apis", () => ({
  getExchanges: jest.fn(),
  limit: 10,
}));

const mockedGetExchanges = jest.mocked(getExchanges);

describe("Directory", () => {
  beforeEach(() => {
    mockedGetExchanges.mockResolvedValue([
      {
        id: "gdax",
        name: "Coinbase Exchange",
        country: "United States",
        url: "https://www.coinbase.com/",
        image: "https://example.com/coinbase.png",
        trust_score_rank: 1,
      },
      {
        id: "kraken",
        name: "Kraken",
        country: "United States",
        url: "https://www.kraken.com/",
        image: "https://example.com/kraken.png",
        trust_score_rank: 2,
      },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the directory heading and exchange list limit", async () => {
    render(
      <MemoryRouter>
        <Directory />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/CryptoCurrency exchanges on Coingecko/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/limited to 10/i)).toBeInTheDocument();

    expect(await screen.findByText("Coinbase Exchange")).toBeInTheDocument();
    expect(screen.getByText("Kraken")).toBeInTheDocument();
  });

  test("fetches and renders exchanges", async () => {
    render(
      <MemoryRouter>
        <Directory />
      </MemoryRouter>
    );

    expect(mockedGetExchanges).toHaveBeenCalledTimes(1);

    expect(
      await screen.findByText("Coinbase Exchange")
    ).toBeInTheDocument();

    expect(screen.getByText("Kraken")).toBeInTheDocument();
  });

  test("creates links to exchange details pages", async () => {
    render(
      <MemoryRouter>
        <Directory />
      </MemoryRouter>
    );

    const exchangeLink = await screen.findByRole("link", {
      name: /Coinbase Exchange/i,
    });

    expect(exchangeLink).toHaveAttribute("href", "/exchanges/gdax");
  });

  test("renders exchange logos with accessible alt text", async () => {
    render(
      <MemoryRouter>
        <Directory />
      </MemoryRouter>
    );

    const logo = await screen.findByAltText("Coinbase Exchange logo");

    expect(logo).toHaveAttribute(
      "src",
      "https://example.com/coinbase.png"
    );
  });
});