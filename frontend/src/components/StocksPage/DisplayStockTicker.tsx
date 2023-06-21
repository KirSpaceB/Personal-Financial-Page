import { useContext } from "react";
import { InputBar } from "../shared/InputBar/InputBar";
import { TickerContext } from "../shared/InputBar/TickerContext";
export const DisplayStockTicker = () => {
  const tickerContext = useContext(TickerContext);
  const { tickerData } = tickerContext;

  let tickerName, tickerInfo, close, open;

  if(tickerData) {
    tickerName = Object.keys(tickerData)[0];
    tickerInfo = tickerData[tickerName];
    close = tickerInfo?.Close || 0;
    open = tickerInfo?.Open || 0;
  }

  return (
    <div className="mr-10 flex flex-col items-center justify-center">
      <InputBar svgPaths={["M3 3v18h18,M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0,M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0,M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0,M10.16 10.62l2.34 2.88,M15.088 13.328l2.837 -4.586 "]}/>
      <div className="mt-4">
        <p>TickerName: {tickerName}</p>
        <p>Close: {close}</p>
        <p>Open: {open}</p>
      </div>
    </div>
  )
}