import { render, screen } from '@testing-library/react';
import ThumbnailImage from './';

const dummyImage = {
  uri: '',
  alt: "Alt text"
}

test('renders thumbnail image with alt text', () => {
  render(<ThumbnailImage image={dummyImage} />);
  const imageElement = screen.getByAltText('Alt text');
  expect(imageElement).toBeInTheDocument();
});