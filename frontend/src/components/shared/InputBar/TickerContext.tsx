import React, { useContext } from 'react';

export interface ITickerData {
  Close: number;
  Open: number;
  Volatility: number[];
}

interface ITickerContext {
  tickerData: ITickerData | null;
  setTickerData: (value: ITickerData | null) => void;
}

export const TickerContext = React.createContext<ITickerContext | undefined>(undefined);
