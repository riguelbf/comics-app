import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom'
import SearchBar from '../../components/SearchBar';

describe('SearchBar component', () => {
  afterEach(() => {
    cleanup()
  })

  test('should to render', () => {

    const props = {
      handleSearch: jest.fn()
    }

    const { container } = render(
      <MemoryRouter>
        <SearchBar {...props} />
      </MemoryRouter>
    )

    const button = container.querySelector('button');
    const input = container.querySelector('input');
    const svg = container.querySelector('svg');

    expect(container).toBeTruthy();
    expect(button).toBeTruthy();
    expect(input).toBeTruthy();
    expect(svg).toBeTruthy();
  });

});
