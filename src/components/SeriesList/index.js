import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import SerieCard from '../SerieCard';

const SeriesList = ({ seriesList }) => {

  return (
    <Container>
      <h1>Series</h1>
      <div>
        {
          seriesList && seriesList.map(serie =>
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
  seriesList: []
};

SeriesList.propTypes = {
  // eslint-disable-next-line react/require-default-props
  seriesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    startYear: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    })
  }
  ))
};

export default SeriesList;
