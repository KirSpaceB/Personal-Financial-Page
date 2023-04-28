import { StocksCardFromIndex } from "./Cards/StocksCard"
import {CryptoCard} from "./Cards/CryptoCard"
import { JournalCard } from "./Cards/JournalCard/JournalCard"

import SideBar from "./SideBar/SideBar"
import NewsCard from "./NewsCard/NewsCard"
import cardsData from '../../assets/cardsData.json'

//Read code from time to time for wtfs momments ;o
const DashboardPage = () => {
  return (
    <div>

      <div className="flex">
        
        <div>
          <SideBar/>
        </div>
        
        <JournalCard journalCardTitle={cardsData['journalTitle']}/>
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