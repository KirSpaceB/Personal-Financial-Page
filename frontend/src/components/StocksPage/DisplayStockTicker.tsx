import { useEffect, useState } from "react"
import { InputBar } from "../shared/InputBar/InputBar";

export const DisplayStockTicker = () => {
  
  return (
    <div className="mr-10 flex flex-col items-center justify-center">
      <InputBar svgPaths={["M3 3v18h18,M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0,M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0,M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0,M10.16 10.62l2.34 2.88,M15.088 13.328l2.837 -4.586 "]}/>
      <div className="mt-4">
        <p>TickerName</p>
        <p>24H High</p>
        <p>24H Low</p>
      </div>
    </div>
  )
}