import { useEffect, useState } from "react"

type tickerType = {
  "Ticker":string,
  "24h High":number,
  "24h Low": number,
};

export const DisplayCryptoTicker = () => {
  const [companyTicker, setCompanyTicker] = useState<tickerType>();
  useEffect(() => {
    const fakeTicker = {
      "Ticker":"TSLA",
      "24h High":250,
      "24h Low": 200,
    };
    setCompanyTicker(fakeTicker)
  },[])
  
  return (
    <div className="bg-blue-500 w-[500px] h-[500px] mr-4">
      <p>We put the tickername in the input and it pops out on the graph</p>
      <input placeholder="CryptoTicker"></input>
      {companyTicker && Object.entries(companyTicker).map(([key, value], index) => (
        <p key={index}>{`${key} : ${value}`}</p>
      ))};
    </div>
  )
}
