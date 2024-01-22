import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Delivery Fee Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/Delivery Fee Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
