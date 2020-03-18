import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Footer from '../../components/Footer';

describe('Header component', () => {

  afterEach(() => {
    cleanup();
  });

  test('should to render', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>);

    const span = container.querySelector("span");

    expect(container).toBeDefined();
    expect(span.innerHTML).toContain('Riguel Figueiró');
  });
});
