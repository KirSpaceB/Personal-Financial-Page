import { useEffect, useState } from "react"
import { InputBar } from "../shared/InputBar/InputBar";

export const DisplayStockTicker = () => {
  
  return (
    <div className="mr-4">
      <p>We put the tickername in the input and it pops out on the graph</p>
      <InputBar/>
    </div>
  )
}