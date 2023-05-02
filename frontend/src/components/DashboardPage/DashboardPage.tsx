import { StocksCardFromIndex } from "./Cards/StocksCard";
import {CryptoCard} from "./Cards/CryptoCard";
import { JournalCard } from "./Cards/JournalCard/JournalCard";
import { SideBar } from "./SideBar/SideBar";
import cardsData from "../../assets/cardsData.json";
import { NewsCard } from "../shared/NewsCard/NewsCard";
import { useNavigate } from "react-router-dom";
//Read code from time to time for wtfs momments ;o
const DashboardPage = () => {
  const navigateHook = useNavigate()
  function navigateToStocksPage() {
    navigateHook('/StocksPage')
  };
  
  return (
    <div>

      <div>
        
        <aside className="absolute w-16 h-screen mr-10 bg-pc2">
          <SideBar/>
        </aside>
        
        <div className="flex items-center justify-center space-x-14">
          
          <div className="w-[293px] h-[363px] mt-10 rounded-lg bg-pc2 text-center text-4xl font-bold">
            <JournalCard journalCardTitle={cardsData['journalTitle']}/>
          </div>
          
          <div className="w-[293px] h-[363px] mt-10 rounded-lg bg-pc2 text-center text-4xl font-bold cursor-pointer" onClick={navigateToStocksPage}>
            <StocksCardFromIndex stocksCardTitle={cardsData['stockTitle']}/>
          </div>
          
          <div className="w-[293px] h-[363px] mt-10 rounded-lg bg-pc2 text-center text-4xl font-bold">
            <CryptoCard cryptoCardTitle={cardsData['cryptoTitle']}/>          
          </div>

        </div>

        <div className="w-5/6 h-64 mx-auto mt-8 bg-pc3">
          <NewsCard/>
        </div>

      </div>

    </div>
  )
}

export default DashboardPage