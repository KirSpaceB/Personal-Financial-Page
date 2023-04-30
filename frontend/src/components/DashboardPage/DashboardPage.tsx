import { StocksCardFromIndex } from "./Cards/StocksCard";
import {CryptoCard} from "./Cards/CryptoCard";
import { JournalCard } from "./Cards/JournalCard/JournalCard";
import SideBar from "./SideBar/SideBar";
import cardsData from "../../assets/cardsData.json";
import { NewsCard } from "../shared/NewsCard/NewsCard";

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
      <NewsCard/>

    </div>
  )
}

export default DashboardPage