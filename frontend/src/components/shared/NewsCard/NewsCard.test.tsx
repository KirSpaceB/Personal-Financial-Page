// We need to test for useState 
// Integration test for getNewsAPI and see if we receive the correct data
//Biggest test we want to do for react components is that it renders contents
import { act } from 'react-dom/test-utils';
import { getNewsAPI } from '../../../services/NewsAPI/getNewsAPI';
import { NewsCard } from './NewsCard'
import {screen, render} from '@testing-library/react';

// We mock it because its an external dependcies relative to NewCards(we dont need to mock the entire implmentation)
jest.mock('../../../services/NewsAPI/getNewsAPI', () => {
  return {
    // New module or mocked module
    // This module has the same exports
    getNewsAPI: jest.fn().mockResolvedValue({
      results:[
        {},
        {},
        {
          title:'',
          link:'',
          pubDate:'',
        }
      ]
    })
  }
});

describe('NewsCard', () => {
  it('Renders content', () => {
    //Setup
    const mockTitle = '';

    //Work
    act(async () => {
      const {container} = render(<NewsCard/>);
      const title = container.querySelector('.title') // Expects this to mock the title classname in the NewCard
      container.querySelector('a');
      container.querySelector('h2');
      //Verify
      expect(title).toBeDefined();
    })

  })
})