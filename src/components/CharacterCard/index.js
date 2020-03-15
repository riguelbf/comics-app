import React from 'react'
import PropTypes from 'prop-types'
import { MdAccountCircle, MdVpnKey } from 'react-icons/md'

import { Container } from './styles'

function CharacterCard ({ character }) {
  const { id, name, thumbnail } = character;

  return (
    <Container>
      <article>
        <div className="mc-content">
          <div className="img-container">
            <img className="img-responsive"
              src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
          </div>
          {/* <div className="mc-description">
            He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
          </div> */}
        </div>
        <footer>
          <span>
            <MdVpnKey size={20} color="#f2db00" />
            {id}
          </span>
          <strong>
            <MdAccountCircle size={20} color="#f2db00" />
            {name}
          </strong>
        </footer>
      </article>
    </Container>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    })
  }).isRequired
}

export default CharacterCard

