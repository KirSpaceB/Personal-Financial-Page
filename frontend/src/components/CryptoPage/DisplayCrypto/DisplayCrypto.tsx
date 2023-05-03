import { useEffect } from "react";
import { getCoinGecko } from "../../../services/CoinGeckoApi/getCoinGecko";

export const DisplayCrypto = () => {
  async function coinGeckApiData() {
    const data = await getCoinGecko();
    return data
  };
  useEffect(() => {
    console.log(coinGeckApiData());    
  },[]);
  return (
    <div>DisplayCrypto</div>
  )
}
