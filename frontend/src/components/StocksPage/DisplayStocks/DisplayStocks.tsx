import { useEffect, useState,useRef } from "react";
import { getAlphaVantage } from "../../../services/AplhaVantageApi/getAlphaVantage";
import { AlphaVantageAPIType } from "../../../services/AplhaVantageApi/getAlphaVantage";
import * as d3 from "d3";

export const DisplayStocks = () => {
  const [displayStocks, setDisplayStocks] = useState<any>();
  const d3Container = useRef(null); // Ref for D3 container
  const generateFakeData = () => {
    const startDate = new Date('2023-06-07T11:30:00');
    const data = [];
  
    for (let i = 0; i < 10; i++) {
      const time = new Date(startDate.getTime() + i * 5 * 60 * 1000);
      const open = Math.random() * 1000;
      const high = open + Math.random() * 100;
      const low = open - Math.random() * 100;
      const close = low + Math.random() * (high - low);
      const volume = Math.floor(Math.random() * 100000);
  
      data.push({
        time,
        open: open.toFixed(4),
        high: high.toFixed(4),
        low: low.toFixed(4),
        close: close.toFixed(4),
        volume: volume.toString(),
      });
    }
  
    return data;
  };

  const prepareData = () => {
    if (displayStocks) {
      const timeSeriesData = displayStocks['Time Series (5min)'];
      const data = Object.entries(timeSeriesData).map(([time, values]) => ({
        time,
        value: parseFloat(values['4. close']),
      }));
      return data;
    }
    return [];
  };

  useEffect(() => {
    const alphaVantageApiData = async () => {
      // const apiData = await getAlphaVantage();
      setDisplayStocks(generateFakeData());
    };
    alphaVantageApiData();
  }, []);

  useEffect(() => {    
    const container = d3.select(d3Container.current);
    // Graph dimentions
    const WIDTH = 500;
    const HEIGHT = 300;
    
    //Append SVG Element to container
    const SVG = container.append("svg").attr("width", WIDTH).attr("height", HEIGHT).style("border","1px solid black");
    
  }, [displayStocks]);
  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen sm:flex-row">
      <div className="w-[500px] h-[500px] bg-red-300 mb-4 sm:mb-0 sm:mr-4">
        test
      </div>
      <div ref={d3Container} className="w-[500px] h-[500px] bg-red-300">
        {/* The D3 graph will be inserted here */}
      </div>
    </div>
  );
};