import StocksCard from "./DashboardCards/StocksCard"
import CryptoCard from "./DashboardCards/CyptoCard"
import { cardProps } from "./cardsData"

const DashboardPage = () => {
  return (
    <div>
      {/* If if I margin here it margins from the page why??? */}
      <div className="flex ml-10">
        {/* What should I name this prop? */}
        <StocksCard cardPropsObject={cardProps}/>
        <CryptoCard cryptoCardProp={cardProps}/>

      </div>

    </div>
  )
}

export default DashboardPage