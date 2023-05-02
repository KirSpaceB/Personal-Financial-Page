import { VITE_NEWS_IO_API_KEY } from "../../constants";
export type GetNewsApiResponse = {
  nextPage: string,
  results: NewsApiResult[],
  status: string,
  totalResults: number,
}

type NewsApiResult = {
  title: string,
  link: string,
  keywords: string[],
  creator: string,
  video_url: string,
  description: string,
  content: string,
  pubDate: string,
  image_url: string,
  source_id: string,
  category: string[],
  country: string[],
  language: string
}

// We want to get data from the API continious updating the News Page 
// So we create a while conditional depending on the data
// We want our service call to model the API as much as possible
export async function getNewsAPI() {
  const response = await fetch(`https://newsdata.io/api/1/news?apikey=${VITE_NEWS_IO_API_KEY}&q=Tesla&country=us&language=en`, {
    method:'GET',
  });
  console.log('API KEY', VITE_NEWS_IO_API_KEY);
  if(response == null) {
    console.error('API did not return proper response');
    return null
  }
  // We have to resolve await which has a file .json
  const newsAPIResponseObject = await response.json() as GetNewsApiResponse;
  console.log(newsAPIResponseObject);
  //Guard cluase
  if(newsAPIResponseObject.results == null) {
    console.error('results not inside response');
    return null
  }

  return newsAPIResponseObject
};