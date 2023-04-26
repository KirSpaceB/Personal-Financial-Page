import StocksCard from "./DashboardCards/StocksCard"
import CryptoCard from "./DashboardCards/CyptoCard"
import { cardProps } from "./cardsData"
import SideBar from "./DashboardSideBar/SideBar"
import NewsCard from "./DashboardNewsCard/NewsCard"

const DashboardPage = () => {
  return (
    <div>

      {/* If if I margin here it margins from the page why??? */}
      <div className="flex">
        <div>
          <SideBar/>
        </div>
        {/* What should I name this prop? */}
        <StocksCard cardPropsObject={cardProps}/>
        <CryptoCard cryptoCardProp={cardProps}/>

      </div>
      <div className="flex h-64 bg-pc3 justify-center content-center">
        <NewsCard/>
      </div>

    </div>
  )
}

export default DashboardPage