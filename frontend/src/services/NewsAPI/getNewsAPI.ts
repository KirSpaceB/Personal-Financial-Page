import { VITE_NEWS_IO_API_KEY } from "../../constants";
import { GetNewsApiResponse } from "./types";

export async function getNewsAPI() {
  const response = await fetch(`https://newsdata.io/api/1/news?apikey=${VITE_NEWS_IO_API_KEY}&q=Tesla&country=us&language=en`, {
    method:'GET',
  });
  if(response == null) {
    console.error('API did not return proper response');
    return null
  }
  // We have to resolve await which has a file .json
  const newsAPIResponseObject = await response.json() as GetNewsApiResponse;
  //Guard cluase
  if(newsAPIResponseObject.results == null) {
    console.error('results not inside response');
    return null
  }
  return newsAPIResponseObject
};