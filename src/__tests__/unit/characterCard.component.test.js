import React from 'react';
import { cleanup } from '@testing-library/react';
import { mountContainerWithRouter } from '../helpers/containerWithRouter';

import CharacterCard from "../../components/CharacterCard";

import characters from '../stubs/character-detail-data-result.json';

describe('CharactedCard component', () => {

  let props = {};

  beforeEach(() => {
    const characterItem = characters.data.results[0];
    props = { character: characterItem };
  });

  afterEach(() => {
    cleanup();
  });

  test('should to render', () => {
    const { container } = mountContainerWithRouter(<CharacterCard {...props} />);

    expect(container).toBeDefined();
  });
});
