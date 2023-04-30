const NEWS_IO_API_KEY = import.meta.env.VITE_NEW_IO_API_KEY
export async function getNewsAPI() {
  const response = await fetch(`https://newsdata.io/api/1/news?apikey=${NEWS_IO_API_KEY}&q=Tesla&country=us&language=en`//Remove This to allow API to work again//, {
    method:'GET',
  });

  const jsonData = await response.json();
  return jsonData
}