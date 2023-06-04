export const JournalHistoryHandler = async (objectFromJornalPage : object) => {
  let testObject = {
    "test":"test",
  };

  const FETCH_URL = "http://127.0.0.1:5000/journal_page_history_blueprint";
  const response = await fetch(FETCH_URL, {
    method: "POST",
    mode: "cors", 
    cache: "no-cache", 
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin":"http://127.0.0.1:5000/journal_page_history_blueprint",
      "Access-Control-Allow-Credentials" : "true" 
    },
    body: JSON.stringify(testObject),
  });

}