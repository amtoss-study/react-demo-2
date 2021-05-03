import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name form and history of visits', () => {
  render(<App />);
  expect(screen.getByText('What is your name?')).toBeInTheDocument();
  expect(screen.getByText('History of visits')).toBeInTheDocument();
});
