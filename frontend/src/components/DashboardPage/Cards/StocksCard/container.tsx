import { stocksCardProps,StocksCard } from "./StocksCard";
export type StockCardContainerProps = stocksCardProps

export const StockCardContainer = (props:StockCardContainerProps) => {

  return (
    <StocksCard {...props}/>
  )
}