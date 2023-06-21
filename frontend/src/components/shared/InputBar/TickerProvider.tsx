import React, { useState } from "react";
import { TickerContext } from "./TickerContext";
import { ITickerData } from "./TickerContext";
export const TickerProvider = ({children}) => {

  const [tickerData, setTickerData] = useState<ITickerData | null>(null);

  return (
    <TickerContext.Provider value={{tickerData, setTickerData}}>
      {children}
    </TickerContext.Provider>
  )
}