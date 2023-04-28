import { cryptoCardProps, CryptoCard } from './CyptoCard'

export type CryptoCardContainerProps = cryptoCardProps

export const CryptoCardContainer = (props:CryptoCardContainerProps) => {
  
  return (
    <CryptoCard {...props} />
  )
}