import { getNewsAPI } from "./getNewsAPI";
import { VITE_NEWS_IO_API_KEY } from "../../constants";

const API_KEY_URL = `https://newsdata.io/api/1/news?apikey=${VITE_NEWS_IO_API_KEY}&q=Tesla&country=us&language=en`;
// Mock the result of what were getting from the return statement
const MOCK_API_RESPONSE = {
  results:[{}]
};
// Whats the difference between creating a variable with call MOCK_KEY using jest.mock
// Does Jest read all the variables in the left file
jest.mock('../../constants', () => {
  return {
    VITE_NEWS_IO_API_KEY:'mockKey'
  }
});

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(MOCK_API_RESPONSE)
});

describe('testing suite for getNewsAPI', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Tests if fetch is being called with API key', async () => {
    //Work
    getNewsAPI()
    //Verify
    expect(global.fetch).toHaveBeenCalledWith(API_KEY_URL,{method:'GET'});
  });
  it('Test API response', async () => {
    //Work
    const result = await getNewsAPI()
    //Verify
    expect(result).toBe(MOCK_API_RESPONSE);
  });
});