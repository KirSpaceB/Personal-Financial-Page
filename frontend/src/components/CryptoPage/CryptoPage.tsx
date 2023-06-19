import { DisplayCrypto } from "./DisplayCrypto/DisplayCrypto";
import { DisplayCryptoTicker } from "./DisplayCryptoTicker";

export const CryptoPage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <DisplayCryptoTicker/>
      <DisplayCrypto/>
    </div>
  )
}