import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { Container } from './styles';

function SearchBar ({ handleSearch }) {

  const [characterName, setCharacterName] = useState("");

  function handleSubmit (e) {
    e.preventDefault();
    handleSearch(characterName);
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name=""
          placeholder="Search ..."
          onChange={(e) => setCharacterName(e.target.value)}
        />
        <button
          type="button"
          onClick={(e) => handleSubmit(e)}
        >
          <MdSearch />
        </button>
      </form>
    </Container>
  );
}

SearchBar.propTypes = {
  handleSearch: PropType.func.isRequired
};

export default SearchBar;
