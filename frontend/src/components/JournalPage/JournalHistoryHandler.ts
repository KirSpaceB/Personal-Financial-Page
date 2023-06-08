export const JournalHistoryHandler = async (objectFromJornalPage : object) => {

  const FETCH_URL = "http://127.0.0.1:5000/journal_page_history";
  const response = await fetch(FETCH_URL, {
    method: "POST",
    mode: "cors", 
    cache: "no-cache", 
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin":"http://127.0.0.1:5000/journal_page_history",
      "Access-Control-Allow-Credentials" : "true" 
    },
    body: JSON.stringify(objectFromJornalPage),
  });
  const jsonData = await response.json();
  console.log(jsonData);
}