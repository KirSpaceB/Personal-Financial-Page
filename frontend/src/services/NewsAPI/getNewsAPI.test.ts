import { getNewsAPI } from "./getNewsAPI";
import { propsFromNewsAPI } from "./types";
import { VITE_NEWS_IO_API_KEY } from "../../constants";


const NEWS_IO_API_KEY = 'api_key';
const API_KEY_URL = `https://newsdata.io/api/1/news?apikey=${NEWS_IO_API_KEY}&q=Tesla&country=us&language=en`;

const mockAPIResponse = {
  title:'test',
  link:'test',
  pubdate:'test',
};

jest.mock('../../constants', () => {
  return {
    viteENVMock:jest.fn().mockImplementation(() => VITE_NEWS_IO_API_KEY)
  }
});

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(mockAPIResponse)
  });
}) as jest.Mock;

describe('testing suite for getNewsAPI', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('tests if newsAPIPropsDisplayedInNewsCard is correctly returning the right object', async () => {
    const expectedProps:propsFromNewsAPI = {
      title:'test',
      link:'link-test',
      pubDate:'pubtest'
    };
    const result = await getNewsAPI();
    expect(result).toEqual(expectedProps);
    expect(fetch).toHaveBeenCalledWith(API_KEY_URL,{method:'GET'});
  });
});