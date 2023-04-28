import { FC } from "react"

export type stocksCardProps = {
  stocksCardTitle:string,
};
export const StocksCard:FC<stocksCardProps> = (props) => {
  const {stocksCardTitle} = props;

  return (
    <div>
      <div>
        <h3 className="w-56 h-56 mt-10 ml-10 bg-pc2">{stocksCardTitle}</h3>
      </div>
    </div>
  )
}