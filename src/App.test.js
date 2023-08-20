import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



// https://jellachoi.notion.site/Modo-19796ed330844a3983890e37c687c154?pvs=4