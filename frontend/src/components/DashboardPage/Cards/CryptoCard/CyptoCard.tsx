import { FC } from 'react'
export type cryptoCardProps = {
  cryptoTitle:string
}
export const CryptoCard:FC<cryptoCardProps> = (props) => {
  const {cryptoTitle} = props
  return (
    <div>
      <h3 className="w-56 h-56 mt-10 ml-10 bg-pc2">{cryptoTitle}</h3>
    </div>
  )
}