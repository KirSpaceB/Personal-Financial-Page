export const tickerAPI = async (tickerName:string) => {

  const response = await fetch("http://127.0.0.1:5000/ticker_data_api", {
    method:"POST",
    headers: {
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin":"http://127.0.0.1:5000"
    },
    body: JSON.stringify(tickerName),
  });
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData
};