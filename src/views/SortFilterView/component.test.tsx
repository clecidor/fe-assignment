import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

test('renders text', () => {
  const { getByText } = render(<Component>Hello World</Component>);
  const textElement = getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});
