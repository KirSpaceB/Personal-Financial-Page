import { FC, useEffect } from 'react';
export type cryptoCardProps = {
  cryptoCardTitle:string
}
export const CryptoCard:FC<cryptoCardProps> = (props) => {

  const {cryptoCardTitle} = props;
  return (
    <div>
      <h3>{cryptoCardTitle}</h3>
    </div>
  )
}