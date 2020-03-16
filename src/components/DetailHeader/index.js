import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function DetailHeader ({ name }) {
  return (
    <Container>
      {name}
    </Container>
  );
}

DetailHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default DetailHeader;
