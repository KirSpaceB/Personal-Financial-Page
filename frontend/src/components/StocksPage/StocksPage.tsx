import { DisplayStockTicker } from "./DisplayStockTicker"
import { DisplayStocks } from "./DisplayStocks/DisplayStocks"


export const StocksPage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <DisplayStockTicker/>
      <DisplayStocks/>
    </div>
  )
}
