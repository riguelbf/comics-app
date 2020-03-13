import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom'
import CharactersList from "../../components/CharactersList"

import characters from '../stubs/characters.data.result.json'

describe('CharactersList component', () => {

  afterEach(() => {
    cleanup()
  })

  test('should to render', () => {

    const props = {
      characters: characters.data.results
    }

    const { container } = render(
      <MemoryRouter>
        <CharactersList {...props} />
      </MemoryRouter>
    );

    expect(container).toBeDefined();
  });
});
