import { render, screen } from '@testing-library/react';
import App from './App';

test('Verify initial number', () => {
  render(<App />);
  const numberEl = screen.getByText(/1/);

  expect(numberEl).toBeInTheDocument();
});
