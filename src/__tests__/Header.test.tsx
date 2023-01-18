import { render, screen } from '@testing-library/react';
import { Header } from '../component/Header';

test('renders Header component', () => {
  render(<Header />);
  const titleText = '都道府県別人口推移';
  expect(screen.getByText(titleText)).toBeInTheDocument();
});
