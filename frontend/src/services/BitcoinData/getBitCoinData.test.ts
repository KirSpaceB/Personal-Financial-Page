import { getBitcoinData } from "./getBitCoinData";
// Setup
const URL = `http://127.0.0.1:5000/bitcoin_historical_data`;

const MOCK_API_RESPONSE = {
  results: {}
}
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(MOCK_API_RESPONSE)
});

afterEach(() => {
  jest.clearAllMocks()
})

test('Get request for BitcoinData', async () => {
  //Work
  getBitcoinData();
  //Verify
  expect(global.fetch).toHaveBeenCalledWith(URL, {
    method:'GET',
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:5000',
      'Accept':'application/json',
    },
  });
  //Work
  const response = await getBitcoinData();
  //Verify
  expect(response).toBe(MOCK_API_RESPONSE)
});