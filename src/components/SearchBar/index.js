import React from 'react';
import PropType from 'prop-types'

import { MdSearch } from 'react-icons/md';
import { Container } from './styles'

function SearchBar ({ handleSearch }) {
  return (
    <Container>
      <input
        type="text"
        name=""
        placeholder="Search ..."
      />
      <button
        type="button"
        onClick={() => handleSearch()}
      >
        <MdSearch />
      </button>
    </Container>
  )
}

SearchBar.propTypes = {
  handleSearch: PropType.func.isRequired
}

export default SearchBar;
