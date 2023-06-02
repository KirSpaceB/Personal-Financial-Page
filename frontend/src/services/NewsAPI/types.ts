export type GetNewsApiResponseType = {
  nextPage: string,
  results: NewsApiResult[], // See this type right here its more safety from our other type
  status: string,
  totalResults: number,
};
export type NewsApiResult = {
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
};