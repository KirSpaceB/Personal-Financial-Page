import { FC } from "react"
import { ICardInterface } from "../dashboardPageTypes"
//The generic type determines the shape of the prop
const StocksCard:FC<{cardPropsObject:ICardInterface}> = ({cardPropsObject:{stockTitle}}) => {
  return (
    <div className="w-56 h-56 bg-pc2 mt-10">
      <h3>{stockTitle}</h3>
    </div>
  )
}

export default StocksCard