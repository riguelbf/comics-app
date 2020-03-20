import React from 'react';
import { cleanup } from '@testing-library/react';
import { mountContainerWithRouter } from '../helpers/containerWithRouter';

import Character from '../../pages/Character';

describe('Character form page', () => {

  afterEach(cleanup);

  test('should to render', () => {
    const { container, findByTestId } = mountContainerWithRouter(
      <Character />
    );

    const header = findByTestId('header-character');
    const form = findByTestId('form-character');

    expect(container).toBeDefined();
    expect(header).toBeDefined();
    expect(form).toBeDefined();
  });

});
