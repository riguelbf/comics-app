import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mountContainerWithRouter } from '../helpers/containerWithRouter';

import CharactersList from "../../components/CharactersList";

import characters from '../stubs/characters.data.result.json';

describe('CharactersList component', () => {

  let props = {};

  beforeEach(() => {
    props = {
      characters: characters.data.results
    };
  });

  afterEach(() => {
    cleanup();
  });

  test('should to render', () => {

    const { container } = mountContainerWithRouter(<CharactersList {...props} />);

    expect(container).toBeDefined();
  });
});
