import React from 'react';
import { mountContainerWithRouter } from "../helpers/containerWithRouter";
import DetailHeader from '../../components/DetailHeader';

describe('Detail header component', () => {
  test.only('should to render', async () => {

    const props = {
      name: 'fake character name'
    };

    const { container } = mountContainerWithRouter(<DetailHeader {...props} />);

    expect(container).toBeDefined();

  });
});

