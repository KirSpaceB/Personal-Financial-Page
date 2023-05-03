import { VITE_APLHA_VANTAGE_KEY } from "../../constants";
const symbol = 'MSFT';
const IT_WORKS_PLACE_HOLDER = 'test'
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${IT_WORKS_PLACE_HOLDER}`;

export async function getAlphaVantage() {
  const response = await fetch(url, {
    method:'GET'
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData
}