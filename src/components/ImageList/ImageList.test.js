import { render } from '@testing-library/react';
import ImageList from './';

const dummyImages = [
  {
    uri: '/1'
  },
  {
    uri: '/2'
  },
  {
    uri: '/3'
  }
]

test('renders image list', () => {
  const { container } = render(<ImageList images={dummyImages} />);
  expect(container.getElementsByClassName('image-container').length).toBe(3);
});