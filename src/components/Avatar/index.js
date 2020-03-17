import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Avatar ({ thumbnail, name, handleClick }) {
  return (
    <Container>
      <div data-testid="avatar"
        onClick={() => handleClick()}
      >
        <div>
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </div>
      </div>
    </Container>
  );
}

Avatar.defaultProps = {
  handleClick: () => { }
};

Avatar.propTypes = {
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }).isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default Avatar;
