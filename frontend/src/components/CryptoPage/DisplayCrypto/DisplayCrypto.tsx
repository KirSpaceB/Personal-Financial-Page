import { useEffect, useState } from "react";
import { getCoinGecko } from "../../../services/CoinGeckoApi/getCoinGecko";
import {get} from "../../../services/BitcoinData/get"
type ResponseData = {
  [key: string]: {
    usd: number;
    usd_24h_vol: number;
    usd_market_cap: number;
  };
};

export const DisplayCrypto = () => {
  const [displayCoin, setDisplayCoin] = useState<ResponseData>({});

  async function coinGeckApiData() {
    const data = await getCoinGecko();
    setDisplayCoin(data);
  }
  async function getApi() {
    const data = await get();
    console.log(data)
  }

  useEffect(() => {
    getApi()
  }, []);

  return (
    <div>
      {Object.entries(displayCoin).map(([key, responseData], index) => (
        <div key={index}>
          {key}: {responseData.usd} {responseData.usd_24h_vol} {responseData.usd_market_cap}
        </div>
      ))}
    </div>
  );
};