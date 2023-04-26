import React, { FC } from 'react'
import { ICardInterface } from '../dashboardPageTypes'

const CryptoCard:FC<{cryptoCardProp:ICardInterface}> = ({cryptoCardProp:{cryptoTitle}}) => {
  return (
    <div>
      <h3 className="w-56 h-56 bg-pc2 mt-10 ml-10">{cryptoTitle}</h3>
    </div>
  )
}

export default CryptoCard