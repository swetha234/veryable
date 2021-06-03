import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Users App', () => {
  render(<App />);
  const header = screen.getByText('Users');
  expect(header).toBeInTheDocument();
});

