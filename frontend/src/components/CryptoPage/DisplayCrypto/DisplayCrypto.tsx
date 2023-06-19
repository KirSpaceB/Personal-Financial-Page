import { useEffect, useState, useRef } from "react";
import { generateFakeData } from "../../../services/FakeData/generateFakedata";
import * as d3 from "d3";

export const DisplayCrypto = () => {
  const [coinGraphData] = useState<Array<Object>>();
  const d3Container = useRef(null);
  
  useEffect(() => {

    console.log(coinGraphData);
    const container = d3.select(d3Container.current);
    container.select('svg').remove();
    
    // Define the margins, width, and height of your SVG
    const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 };
    const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT;
    const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;
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
    
  }, [coinGraphData]);

  return (
    <div>
      <div ref={d3Container}>{/* Displays the chart on the UI */}</div>
    </div>
  );
};