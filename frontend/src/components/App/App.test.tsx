import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('Makes sure app is correctly rendering', () => {
  render(<App />);

});