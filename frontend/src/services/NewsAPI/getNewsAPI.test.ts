import { getNewsAPI } from "./getNewsAPI";
const NEWS_IO_API_KEY = 'mockKey';
const API_KEY_URL = `https://newsdata.io/api/1/news?apikey=${NEWS_IO_API_KEY}&q=Tesla&country=us&language=en`;
//How do I actually mock the api response
const MOCK_API_RESPONSE = {
  title:'test',
  link:'test',
  pubdate:'test',
  results:[{},{}]
};
// When we mock our variables we use in the none test file it uses the actual variable values. BUT when we call our function in jest it uses MOCKED variable values rather than the actual values
jest.mock('../../constants', () => {
  return {
    VITE_NEWS_IO_API_KEY:'mockKey'
  }
});
//Same as fetch on left. Instead of calling actual fetch. gl
//Global fetches all fetch 
//global.fetch points to a mocked version of fetch intead of actual fetch
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(MOCK_API_RESPONSE)
})

describe('testing suite for getNewsAPI', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Tests if fetch is being called with API key', async () => {
    //Work
    const result = getNewsAPI()
    expect(global.fetch).toHaveBeenCalledWith(API_KEY_URL,{method:'GET'});
  });
  it('Test API response', async () => {
    //Work
    const result = await getNewsAPI()
    //Verify
    expect(result).toBe(MOCK_API_RESPONSE);
  });
});