import React from 'react';
import {render,screen,act} from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewsCard } from './NewsCard';
import { getNewsAPI } from '../../../services/NewsAPI/getNewsAPI';

jest.mock('../../../services/NewsAPI/getNewsAPI');

const mockGetNewsAPI = getNewsAPI as jest.MockedFunction<typeof getNewsAPI>;
const MOCK_INITIAL_VALUES = {
  title:'t',
  link:'i',
  pubDate:'t',
};

describe('Test for NewsCard component', () => {
  beforeEach(async () => {
    mockGetNewsAPI.mockResolvedValue(MOCK_INITIAL_VALUES);
    await act(async () => {
      render(<NewsCard/>);
    });
  });

  test("renders news title", () => {
    expect(screen.getByText(MOCK_INITIAL_VALUES.title)).toBeInTheDocument();
  });

  test("renders news link", () => {
    const link = screen.getByText("Link to Article") as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link.href).toBe(MOCK_INITIAL_VALUES.link);
  });

  test("renders news published date", () => {
    expect(screen.getByText(`Published Date ${MOCK_INITIAL_VALUES.pubDate}`)).toBeInTheDocument();
  });

})

