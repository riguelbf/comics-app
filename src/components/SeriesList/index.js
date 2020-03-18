import React, { useState } from 'react';
import PropTypes from 'prop-types';
import seriesListStub from '../../__tests__/stubs/character-series-data-result.json';

import { Container } from './styles';
import SerieCard from '../SerieCard';

const SeriesList = ({ characterId }) => {

  const [seriesList] = useState(seriesListStub.data.results);

  return (
    <Container>
      <h1>Series</h1>
      <div>
        {
          seriesList.map(serie =>
            <SerieCard
              key={serie.id}
              id={serie.id}
              title={serie.title}
              startYear={serie.startYear}
              thumbnail={serie.thumbnail}
            />)
        }
      </div>
    </Container>
  );
};

SeriesList.defaultPropTypes = {
  characterId: 1011334
};

SeriesList.propTypes = {
  characterId: PropTypes.number.isRequired
};

export default SeriesList;
