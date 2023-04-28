import { FC } from 'react'
export type cryptoCardProps = {
  cryptoCardTitle:string
}
export const CryptoCard:FC<cryptoCardProps> = (props) => {
  const {cryptoCardTitle} = props;
  return (
    <div>
      <h3 className="w-56 h-56 mt-10 ml-10 bg-pc2">{cryptoCardTitle}</h3>
    </div>
  )
}