import { render, screen } from '@testing-library/react';
import { Title } from '../component/Title';

test('renders Header component', () => {
  render(<Title />);
  const title = 'ι½ιεΊη';
  expect(screen.getByText(title)).toBeInTheDocument();
});
