import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Header } from './Header';
import { Logo } from './logo/Logo';

it('Render header', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Checking the address of the link on the logo', () => {
  render(<Logo />);
  const linkLogo = screen.getByRole('link', { name: /movies/i });
  userEvent.click(linkLogo);
  expect(linkLogo).toHaveAttribute('href', '/');
});
