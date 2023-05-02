import { FC } from "react"

export type stocksCardProps = {
  stocksCardTitle:string,
};
export const StocksCard:FC<stocksCardProps> = (props) => {
  const {stocksCardTitle} = props;
  return (
    <div>
      <div>
        <h3>{stocksCardTitle}</h3>
      </div>
    </div>
  )
}