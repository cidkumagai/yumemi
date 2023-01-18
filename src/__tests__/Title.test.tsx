import { render, screen } from '@testing-library/react';
import { Title } from '../component/Title';

test('renders Header component', () => {
  render(<Title />);
  const title = '都道府県';
  expect(screen.getByText(title)).toBeInTheDocument();
});
