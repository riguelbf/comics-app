import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Header from '../../components/Header'

describe('Header component', () => {

  afterEach(() => {
    cleanup()
  })

  test('should to render', () => {
    const { container, getByTestId } = render(<Header />)

    const logo = getByTestId("logo");

    expect(container).toBeTruthy();
    expect(logo).toBeTruthy();
  });
});
