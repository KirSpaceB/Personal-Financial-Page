const symbol = 'MSFT';
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
interface MetaData {
  "1. Information":string,
  "2. Symbol":string,
  "3. Last Refreshed": string,
  "4. Interval":string,
  "5. Output Size": string,
  "6. Time Zone":string
}
interface TimeSeriesEntry {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}
export interface AlphaVantageAPIType {
  "Meta Data":MetaData,
  "Time Series (5min)":TimeSeriesEntry
}

export async function getAlphaVantage() {
  const response = await fetch(url, {
    method:'GET'
  });
  const responseData: AlphaVantageAPIType = await response.json();
  console.log(responseData);
  return responseData
}