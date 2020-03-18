import React from 'react';
import PropTypes from 'prop-types';

import { MdVpnKey } from 'react-icons/md';
import { Container } from './styles';

const SerieCard = ({ id, title, startYear, thumbnail }) => {
  return (
    <Container>
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
      />
      <div>
        <span><MdVpnKey /> {id}</span>
        <span>{`Title: ${title}`}</span>
        <span>{`Start year: ${startYear}`}</span>
      </div>
    </Container>
  );
};

SerieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  startYear: PropTypes.number.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }).isRequired
};

export default SerieCard;
