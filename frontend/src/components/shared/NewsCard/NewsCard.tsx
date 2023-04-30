import { useEffect, useState } from "react"
import { getNewsAPI } from "../../../services/NewsAPI/getNewsAPI"

export const NewsCard = () => {
  const [getNews, setGetNews] = useState([{
    newsTitle:'',
    newsImageUrl:''
  }])
  useEffect(() => {
    const fetchNewsData = async () => {
      const getNewsFromAPI = await getNewsAPI();
      const title = getNewsFromAPI.results[9].title
      const imageUrl = getNewsFromAPI.results[9].image_url
      setGetNews([{newsTitle:title, newsImageUrl:imageUrl}])      
    };
    fetchNewsData()
  },[])

  return (
    <div className="flex justify-center cotent-center">
      <div className="w-4/6 h-72 bg-pc3">
        {getNews.map((news,index) => (
          <div key={index}>
            {news.newsTitle}
            <a href={news.newsImageUrl}>Image Url Pawg</a>
          </div>
        ))}
      </div>
    </div>
  )
}