const NEWS_IO_API_KEY = import.meta.env.VITE_NEW_IO_API_KEY
import { propsFromNewsAPI } from "./types";
export async function getNewsAPI() {
  const responseFromNewsAPI = await fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_IO_API_KEY}&q=Tesla&country=us&language=en`/, {
    method:'GET',
  });

  const newsAPIResponseObject = await responseFromNewsAPI.json();
  const titlePropNewsAPI = newsAPIResponseObject.results[2].title;
  const linkPropNewsAPI = newsAPIResponseObject.results[2].link;
  const pubDatePropNewsAPI = newsAPIResponseObject.results[2].pubDate;
  const newsAPIPropsDisplayedInNewsCard:propsFromNewsAPI = {
    title:titlePropNewsAPI,
    link:linkPropNewsAPI,
    pubDate:pubDatePropNewsAPI
  }
  return newsAPIPropsDisplayedInNewsCard
}