import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Component from '.';

test('renders text', () => {
  const { getByText } = render(<MemoryRouter><Component>Hello World</Component></MemoryRouter>);
  const textElement = getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});
