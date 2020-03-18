import React from 'react';
import { MdCopyright } from 'react-icons/md';
import { Container } from './styles';


export default function Footer () {
  return (
    <Container>
      <footer>
        <span>developed by <MdCopyright />Riguel Figueiró</span>
      </footer>
    </Container>
  );
}
