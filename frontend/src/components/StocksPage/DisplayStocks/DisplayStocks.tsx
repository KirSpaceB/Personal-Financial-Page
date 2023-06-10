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
    
   // Use D3's select method to get the container where the SVG will be appended
   const container = d3.select(d3Container.current);

   // Define the margins, width, and height of your SVG
   const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 };
   const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT;
   const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;
   
   // Clear existing svg from the container before appending a new one
   container.select('svg').remove();
 
   // Append an SVG to your container and add a group (g) element which will contain your plot
   const SVG = container.append("svg")
     .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
     .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
     .style("border","1px solid black")
     .append("g")
     .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);
 
   // Generate your data (replace this with actual data source in a live implementation)
   const data = generateFakeData();
 
   // Define scales for your axes based on your data
   const xExtent = d3.extent(data, d => new Date(d.time));
   const yExtent = d3.extent(data, d => +d.close);
 
   const xScale = d3.scaleTime()
     .domain(xExtent[0] && xExtent[1] ? xExtent : [new Date(), new Date()])
     .range([0, WIDTH]);
   
   const yScale = d3.scaleLinear()
     .domain(yExtent[0] !== undefined && yExtent[1] !== undefined ? yExtent : [0, 0])
     .range([HEIGHT, 0]);
 
   // Define the line generator with scaled x and y values
   const line = d3.line()
     .x(d => xScale(new Date(d.time)))
     .y(d => yScale(+d.close));
 
   // Add the line path to the SVG using the line generator and data
   SVG.append("path")
     .datum(data)
     .attr("fill", "none")
     .attr("stroke", "steelblue")
     .attr("stroke-linejoin", "round")
     .attr("stroke-linecap", "round")
     .attr("stroke-width", 1.5)
     .attr("d", line);
 
   // Define the x and y axes using the scales
   const xAxis = d3.axisBottom(xScale);
   const yAxis = d3.axisLeft(yScale);
 
   // Append the x and y axes to the SVG
   SVG.append("g")
     .attr("transform", `translate(0, ${HEIGHT})`)
     .call(xAxis);
 
   SVG.append("g")
     .call(yAxis);
    // if (container.select("svg").empty()) {

    // };
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen sm:flex-row">
      <div className="w-[500px] h-[500px] bg-red-300 mb-4 sm:mb-0 sm:mr-4">
        test
      </div>
      <div ref={d3Container}>
      </div>
    </div>
  );
};