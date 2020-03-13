import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom'
import Header from '../../components/Header'

describe('Header component', () => {

  afterEach(() => {
    cleanup()
  })

  test('should to render', () => {
    const { container, getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);

    const logo = getByTestId("logo");

    expect(container).toBeDefined();
    expect(logo).toBeDefined();
  });
});
