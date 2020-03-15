import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import CharacterCard from "../../components/CharacterCard";

import character from '../stubs/character-detail-data-result.json'

describe('CharactedCard component', () => {

  let props = {};

  beforeEach(() => {
    const characterItem = character.data.results[0];
    props = { character: characterItem };
  });

  afterEach(() => {
    cleanup()
  });

  test('should to render', () => {


    const { container } = render(
      <MemoryRouter>
        <CharacterCard {...props} />
      </MemoryRouter>
    );

    expect(container).toBeDefined();
  });
})
