import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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
  });

  test('should to render component', () => {

    const { container } = mountContainerWithRouter(<Avatar {...props} />);

    expect(container).toBeDefined();
    expect(container.querySelector('img')).toBeDefined();
  });

  test('should redirect to character detail page', async () => {
    const { container, getByTestId } = render(
      <Avatar {...props} />
    );

    const characterID = '1010729';

    fireEvent.click(getByTestId('avatar'), characterID);

    expect(container.querySelector('img')).toBeDefined();
    expect(container.querySelector('header')).toBeDefined();
    expect(container.querySelector('aside')).toBeDefined();
  });
});

