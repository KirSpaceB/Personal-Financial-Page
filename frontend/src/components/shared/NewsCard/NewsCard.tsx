import { useEffect, useState } from "react"
import { getNewsAPI } from "../../../services/NewsAPI/getNewsAPI"
import { propsFromNewsAPI } from "../../../services/NewsAPI/types"
export const NewsCard = () => {
  const [dataFromNewsFetchNews, setDataFromNewsFetchNews] = useState<propsFromNewsAPI>({
    title:'',
    link:'',
    pubDate:'',
  })
  useEffect(() => {
    const fetchNewsData = async () => {
      const dataToDisplayFromNewsAPI = await getNewsAPI();
      console.log(dataToDisplayFromNewsAPI);
      setDataFromNewsFetchNews(dataToDisplayFromNewsAPI)
    };
    fetchNewsData()
  },[])
  
  const {title,link,pubDate} = dataFromNewsFetchNews;
  
  return (
    <div className="flex justify-center cotent-center">
      <div className="w-4/6 h-72 bg-pc3">
        <h3>{title}</h3>
        <a href={link} target="_blank">Link to Article</a>
        <h2>Published Date {pubDate}</h2>
      </div>
    </div>
  )
}