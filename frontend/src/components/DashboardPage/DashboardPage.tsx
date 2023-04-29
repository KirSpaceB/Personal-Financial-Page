import { StocksCardFromIndex } from "./Cards/StocksCard"
import {CryptoCard} from "./Cards/CryptoCard"
import { JournalCard } from "./Cards/JournalCard/JournalCard"

import SideBar from "./SideBar/SideBar"
import cardsData from '../../assets/cardsData.json'
import { NewsCard } from "../shared/NewsCard/NewsCard"
import { getNewsAPITest } from "../../services/NewsAPI/testfetch"
import { useEffect, useState } from "react"

//Read code from time to time for wtfs momments ;o
const DashboardPage = () => {
  const [getNewsData, setNewsData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const dataFromNewsAPI = await getNewsAPITest();
      console.log(dataFromNewsAPI.results);
      const displayNewAPIData = dataFromNewsAPI.results;
      setNewsData(displayNewAPIData);
    }
    fetchData();
  }, []);
  
  return (
    <div>

      <div className="flex">
        
        <div>
          <SideBar/>
        </div>
        
        <JournalCard journalCardTitle={cardsData['journalTitle']}/>
        <StocksCardFromIndex stocksCardTitle={cardsData['stockTitle']}/>
        <CryptoCard cryptoCardTitle={cardsData['cryptoTitle']}/>
        <div>{getNewsData.map((newsData,index) => (
            <div key={index}>
              <h3>{newsData.title}</h3>
              <p>{newsData.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex content-center justify-center h-64 bg-pc3">
        <NewsCard />
      </div>

    </div>
  )
}

export default DashboardPage