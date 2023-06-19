import { useEffect, useState } from "react"

type tickerType = {
  "Ticker":string,
  "24h High":number,
  "24h Low": number,
};

export const DisplayStockTicker = () => {
  const [companyTicker, setCompanyTicker] = useState<tickerType>();
  useEffect(() => {
    const fakeTicker = {
      "Ticker":"Bitcoin",
      "24h High":25000,
      "24h Low": 2000,
    };
    setCompanyTicker(fakeTicker)
  },[])
  
  return (
    <div className="bg-blue-200 w-[500px] h-[500px] mr-4">
      <p>We put the tickername in the input and it pops out on the graph</p>
      <input placeholder="StockTicker"></input>
      {companyTicker && Object.entries(companyTicker).map(([key, value], index) => (
        <p key={index}>{`${key} : ${value}`}</p>
      ))};
    </div>
  )
}