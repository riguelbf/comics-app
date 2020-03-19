import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCharacters } from '../../store/modules/character/actions';

import { Container } from './styles';
import SearchBar from "../SearchBar";

import logoImage from '../../assets/images/marvel_logo_p.png';

export default function Header () {

  const dispatch = useDispatch();
  const history = useHistory();
  const showSearchBar = history.location.pathname === "/";

  function handleFetchCharacterFiltered (characterName) {
    dispatch(fetchCharacters(characterName));
  }

  return (
    <Container>
      <header>
        <Link to={{ pathname: '/' }}>
          <img data-testid="logo" src={logoImage} alt="Marvel - go home" />
        </Link>
        {showSearchBar && <SearchBar handleSearch={handleFetchCharacterFiltered} />}
      </header>
    </Container>
  );
}
