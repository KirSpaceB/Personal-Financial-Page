import { useEffect, useState } from "react"
import { InputBar } from "../shared/InputBar/InputBar";

export const DisplayStockTicker = () => {
  
  return (
    <div className="mr-10 flex flex-col items-center justify-center">
      <InputBar/>
      <div className="mt-4">
        <p>TickerName</p>
        <p>24H High</p>
        <p>24H Low</p>
      </div>
    </div>
  )
}