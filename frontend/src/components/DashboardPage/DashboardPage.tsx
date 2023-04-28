import { StocksCardFromIndex } from "./Cards/StocksCard"
import {CryptoCard} from "./Cards/CryptoCard"
import SideBar from "./SideBar/SideBar"
import NewsCard from "./NewsCard/NewsCard"
import cardsData from '../../assets/cardsData.json'
//Read code from time to time for wtfs momments ;o
const DashboardPage = () => {
  return (
    <div>

      {/* If if I margin here it margins from the page why??? */}
      <div className="flex">
        <div>
          <SideBar/>
        </div>
        {/* What should I name this prop? */}
          {/* If we setup omit type we wont need crytotitle */}
          <StocksCardFromIndex stocksCardTitle={cardsData['stockTitle']}/>
          <CryptoCard cryptoCardTitle={cardsData['cryptoTitle']}/>

      </div>
      <div className="flex content-center justify-center h-64 bg-pc3">
        <NewsCard/>
      </div>

    </div>
  )
}

export default DashboardPage