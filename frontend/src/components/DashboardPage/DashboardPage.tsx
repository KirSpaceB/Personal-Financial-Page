import { StocksCardFromIndex } from "./Cards/StocksCard";
import {CryptoCard} from "./Cards/CryptoCard";
import { JournalCard } from "./Cards/JournalCard/JournalCard";
import cardsData from "../../assets/cardsData.json";
import { NewsCard } from "../shared/NewsCard/NewsCard";
//Read code from time to time for wtfs momments ;o
const DashboardPage = () => {
  return (
    <div>
        
        <div className="flex items-center justify-center mb-8 space-x-16">
          <a className="w-[250px] h-[300px] mt-10 rounded-lg bg-pc2 text-center text-4xl font-bold cursor-pointer" href="/JournalPage">
            <JournalCard journalCardTitle={cardsData['journalTitle']}/>
          </a>
          <a className="w-[250px] h-[300px] mt-10 rounded-lg bg-pc2 text-center text-4xl font-bold cursor-pointer" href="/StocksPage">
            <StocksCardFromIndex stocksCardTitle={cardsData['stockTitle']}/>
          </a>
          <a className="w-[250px] h-[300px] mt-10 rounded-lg bg-pc2 text-center text-4xl font-bold cursor-pointer" href="/CryptoPage">
            <CryptoCard cryptoCardTitle={cardsData['cryptoTitle']}/>          
          </a>
        </div>
        
        <div className="mx-auto w-[1100px] h-[320px] bg-pc3">
          <NewsCard/>
        </div>
        
    </div>
  )
}

export default DashboardPage