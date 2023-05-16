export async function get() {
  const response = await fetch('http://127.0.0.1:5000/bitcoin_historical_data', {
    method:"GET",
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  });
  const apiData = await response.json();
  console.log(apiData); 
}