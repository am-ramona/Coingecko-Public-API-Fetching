import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the cryptocurrency exchanges directory page", async () => {
  render(<App />);

  expect(
    await screen.findByText(/CryptoCurrency exchanges on Coingecko/i)
  ).toBeInTheDocument();
});