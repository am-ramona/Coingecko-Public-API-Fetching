import type { ExchangeDetails } from "../utils/types";

const baseUrl: string = "https://api.coingecko.com/api/v3";
export const limit: number = 10;

/**
 * Makes an asynchronous request to the CoinGecko API to fetch a list of exchanges using a specified base URL, limit, and API key.
 * @returns {array} the result of the fetch request, a Promise that resolves to the JSON response from the API call.
 */
export const getExchanges = async (): Promise<[]> => {
  const response = await fetch(
    `${baseUrl}/exchanges?per_page=${limit}&x_cg_demo_api_key=${process.env.REACT_APP_API_KEY}`,
  );
  return await response.json();
};

/**
 * An asynchronous function that fetches exchanges by their ID from a specified base URL.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of an exchange.
 * @returns {object} a Promise that resolves to an object ({}).
 */
export const getExchangeById = async (id: string): Promise<ExchangeDetails> => {
  const response = await fetch(`${baseUrl}/exchanges/${id}`);
  // console.log('response', response.json())
  return await response.json();
};
