import React from 'react';
import { mountContainerWithRouter } from '../helpers/containerWithRouter';

import Avatar from '../../components/Avatar';

describe('Avatar component', () => {

  let props = {};

  beforeEach(() => {
    props = {
      thumbnail: {
        path: 'http://fake.com/image',
        extension: 'jpg'
      },
      name: 'Character name',
      handleClick: jest.fn()
    };
  })

  test('should to render component', () => {

    const { container, getByTestId } = mountContainerWithRouter(<Avatar {...props} />);

    expect(container).toBeDefined();
    expect(container.querySelector('img')).toBeDefined();
  });
});

