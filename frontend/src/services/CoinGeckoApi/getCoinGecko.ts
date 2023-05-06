s
// Place holder to stop API calls
const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`

export async function getCoinGecko() {
  const response = await fetch(url,{method:'GET'});
  const responseData = await response.json();
  console.log(responseData);
  
  return responseData
}