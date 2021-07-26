import { render, screen } from '@testing-library/react';
import ExpandedImage from './';

const dummyImage = {
  uri: ''
}

test('renders expanded image header', () => {
  render(<ExpandedImage image={dummyImage} />);
  const headerElement = screen.getByTestId("expanded-image-title");
  expect(headerElement).toBeInTheDocument();
});

test('renders expanded image close button', () => {
  render(<ExpandedImage image={dummyImage} />);
  const closeButton = screen.getByTestId("expanded-close-btn");
  expect(closeButton).toBeInTheDocument();
});