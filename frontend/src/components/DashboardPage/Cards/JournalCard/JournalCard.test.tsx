import { JournalCard } from "./JournalCard"
import {render, screen} from '@testing-library/react'
describe('Test for Journal Card Component', () => {
  const TEST_PROP = 'testicles';
  it('Renders correctly', () => {
    render(<JournalCard journalCardTitle={TEST_PROP}/>);
    const titleElement = screen.getByText(TEST_PROP);
    expect(titleElement).toBeInTheDocument();
  });
});