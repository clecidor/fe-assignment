import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

test('renders learn react link', () => {
  const { getByText } = render(<Component />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
