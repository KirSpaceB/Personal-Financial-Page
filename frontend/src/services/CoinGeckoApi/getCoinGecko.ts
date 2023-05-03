s
const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies='usd'`

export async function getCoinGecko() {
  const response = await fetch(url,{method:'GET'});
  const responseData = await response.json();
  console.log(responseData);
}