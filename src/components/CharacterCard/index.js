import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

function CharacterCard ({ character }) {
  const { id, name, description } = character;

  return (
    <Container>
      <article>
        <div className="mc-content">
          <div className="img-container">
            <img className="img-responsive"
              src="http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg" alt="Character" />
          </div>
          {/* <div className="mc-description">
            He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
          </div> */}
        </div>
        <footer>
          <span>Christopher Walken</span>
          <strong>
            <i className="fa fa-fw fa-star" />
            The Deer Hunter
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
    description: PropTypes.string
  })
}

export default CharacterCard

