import { useEffect, useState } from "react";
import { getCoinGecko } from "../../../services/CoinGeckoApi/getCoinGecko";
import {getBitcoinData} from "../../../services/BitcoinData/getBitCoinData"
type cryptoDataType = {
  "Token":string,
  "High 24h":number,
  "Low 24h":number,
};

export const DisplayCrypto = () => {
  const [displayCoin, setDisplayCoin] = useState<cryptoDataType>();
  
  useEffect(() => {  
    const fakeCryptoToken = {
      "Token":"Bitcoin",
      "High 24h": 100,
      "Low 24h": 20,
    };
    setDisplayCoin(fakeCryptoToken);
  },[])
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen sm:flex-row">
        <div className="w-[500px] h-[500px] bg-red-500">
          {displayCoin && Object.entries(displayCoin).map(([key, value], index) => (
            <div key={index}>
                <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>
        <div className="w-[500px] h-[500px] bg-blue-500">Where The Graph Goes</div>
      </div>
    </div>
  );
};