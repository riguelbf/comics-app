import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mountContainerWithRouter } from '../helpers/containerWithRouter';

import Header from '../../components/Header';

describe('Header component', () => {

  afterEach(() => {
    cleanup();
  });

  test('should to render', () => {
    const { container } = mountContainerWithRouter(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);

    const logo = container.querySelector("img");
    const button = container.querySelector("button");

    expect(container).toBeDefined();
    expect(logo).toBeDefined();
    expect(button).toBeDefined();
  });
});
