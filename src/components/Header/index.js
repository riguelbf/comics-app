import React from 'react';

import { Container } from './styles';

import logoImage from '../../assets/images/marvel_logo.png'

export default function Header () {
  return (
    <Container>
      <img data-testid="logo" src={logoImage} alt="Marvel - go home" />
    </Container>
  )
}
