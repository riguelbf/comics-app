import React from 'react';
import PropTypes from 'prop-types';

import { MdEdit, MdVpnKey } from 'react-icons/md';
import { Container } from './styles';
import Avatar from '../Avatar';

function DetailHeader ({ id, name, description, thumbnail, modified }) {
  return (
    <Container>
      <header />
      <div>
        <Avatar
          name={name}
          thumbnail={thumbnail}
        />
        <aside>
          <h1>{name}</h1>
          <span>
            <MdVpnKey />
            {id}
          </span>
          <span>{`Last modified on: ${modified}`}</span>
        </aside>
        <MdEdit size="60" color="" enableBackgrounds />
      </div>
    </Container>
  );
}

DetailHeader.defaultProps = {
  id: 9999,
  name: 'Comics fake',
  description: 'This a better and fantastic super hero',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/00/5239c3b29cb40',
    extension: 'jpg'
  },
  modified: new Date().toDateString()
};

DetailHeader.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }).isRequired
};

export default DetailHeader;
