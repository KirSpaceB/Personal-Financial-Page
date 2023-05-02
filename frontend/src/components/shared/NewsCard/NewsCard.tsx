import { useEffect, useState } from "react"
import { getNewsAPI } from "../../../services/NewsAPI/getNewsAPI"
type ReleventCardData = {
  title:string,
  link:string,
  pubDate:string,
};
const INITIAL_VALUES:ReleventCardData = {
  title:'',
  link:'',
  pubDate:'',
};
export const NewsCard = () => {
  const [newsAPIResponse, setNewsAPIResponse] = useState<ReleventCardData>(INITIAL_VALUES);
  
  useEffect(() => {
    const fetchNewsData = async () => {
      const API_DATA = await getNewsAPI();
      const desireResult = API_DATA?.results[2] as ReleventCardData
      setNewsAPIResponse(desireResult)
    };
    fetchNewsData()
  },[]);
  
  const {title,link,pubDate} = newsAPIResponse;
  
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