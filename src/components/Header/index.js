import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import SearchBar from "../SearchBar";

import logoImage from '../../assets/images/marvel_logo_p.png';

export default function Header () {
  return (
    <Container>
      <header>
        <Link to="/">
          <img data-testid="logo" src={logoImage} alt="Marvel - go home" />
        </Link>
        <SearchBar handleSearch={() => { }} />
      </header>
    </Container>
  );
}
