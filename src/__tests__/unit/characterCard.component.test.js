import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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

  test('should redirect to character detail page', async () => {
    const { container, getByTestId } = mountContainerWithRouter(
      <CharacterCard {...props} />,
      { characters }
    );

    const characterName = 'wolverine';

    fireEvent.click(getByTestId('avatar'), characterName);

    expect(container.querySelector('img')).toBeDefined();
    expect(container.querySelector('header')).toBeDefined();
    expect(container.querySelector('aside')).toBeDefined();
  });
});
