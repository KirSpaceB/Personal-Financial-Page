import { useEffect, useState } from "react";
import { getAlphaVantage } from "../../../services/AplhaVantageApi/getAlphaVantage";
type MetaData = {
  '1. Information': string,
  '2. Symbol': string,
  '3. Last Refreshed': string,
  '4. Interval': string,
  '5. Output Size': string,
  '6. TimeZone':string
};

type TimeSeriesDataPoint = {
  'open': string,
  'high': string,
  'low': string,
  'close': string,
  'volume': string,
};

type TimeSeries = {
  [timestamp: string]: TimeSeriesDataPoint,
};

type APIResponse = {
  'Meta Data': MetaData,
  'Time Series (5min)': TimeSeries,
};

export const DisplayStocks = () => {
  const [displayStocks, setDisplayStocks] = useState<APIResponse>();

  useEffect(() => {
    const alphaVantageApiData = async () => {
      const apiData = await getAlphaVantage();
      console.log(apiData)
      setDisplayStocks(apiData)
      console.log(displayStocks);
    };
    alphaVantageApiData()
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen sm:flex-row">
      <div className="w-[500px] h-[500px] bg-red-300 mb-4 sm:mb-0 sm:mr-4">
      {displayStocks && Object.entries(displayStocks["Meta Data"]).map(([key, value]) => (
        <div key={key}>{key}: {value}</div>
      ))}
      </div>
      <div className="w-[500px] h-[500px] bg-red-300">
        divTwo
      </div>
    </div>
  );
};