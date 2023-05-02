export type GetNewsApiResponse = {
  nextPage: string,
  results: NewsApiResult[],
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