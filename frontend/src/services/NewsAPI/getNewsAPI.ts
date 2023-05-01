const NEWS_IO_API_KEY = VITE_NEWS_IO_API_KEY
import { VITE_NEWS_IO_API_KEY } from "../../constants";
import { propsFromNewsAPI } from "./types";
const PLACE_HOLDER_FOR_API_KEY = 'testicles';
// We want to get data from the API continious updating the News Page 
// So we create a while conditional depending on the data
export async function getNewsAPI() {
  const responseFromNewsAPI = await fetch(`https://newsdata.io/api/1/news?apikey=${PLACE_HOLDER_FOR_API_KEY}&q=Tesla&country=us&language=en`, {
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