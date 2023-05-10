import { useEffect, useState } from "react";
import { getAlphaVantage } from "../../../services/AplhaVantageApi/getAlphaVantage";
import React from "react";

export const DisplayStocks = () => {
  const [displayStocks, setDisplayStocks] = useState({});

  useEffect(() => {
    async function getData() {
      const apiData = await getAlphaVantage();
      setDisplayStocks(apiData["Time Series (5min)"]);
    }
    getData();
  }, []);
  console.log(displayStocks);
  
  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-4 text-2xl font-semibold">Display Stock Component</h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="font-bold">Time</div>
        <div className="font-bold">Open</div>
        <div className="font-bold">High</div>
        <div className="font-bold">Low</div>
        <div className="font-bold">Close</div>
        {displayStocks ? Object.entries(displayStocks).map(([time, stock]) => (
          <React.Fragment key={time}>
            <div className="border-b border-gray-300">{time}</div>
            <div className="border-b border-gray-300">{stock["1. open"]}</div>
            <div className="border-b border-gray-300">{stock["2. high"]}</div>
            <div className="border-b border-gray-300">{stock["3. low"]}</div>
            <div className="border-b border-gray-300">{stock["4. close"]}</div>
          </React.Fragment>
        )) : 'Display Stocks cannot be rendered'}
        {}
      </div>
    </div>
  );
};