import { render, screen } from '@testing-library/react';
import { CustomError } from '../component/CustomError';

test('renders Header component', () => {
  render(<CustomError message='Page Not Found' />);
  const jpMsg1 = 'エラーが発生しました。';
  const jpMsg2 = 'しばらく時間を置いてから再度アクセスしてください。';
  const jpMsg = new RegExp(`${jpMsg1}+${jpMsg2}`);
  expect(screen.getByText(jpMsg)).toBeInTheDocument();
});
