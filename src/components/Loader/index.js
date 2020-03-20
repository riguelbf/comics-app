import React from 'react';
import { useSelector } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from 'react-loader-spinner';
import { Container } from './styles';

export default function ProgressBar () {

  const showComponent = useSelector(state => state.isLoading);

  return (
    <Container>
      <Loader
        type="Oval"
        color="#d5171c"
        height={80}
        width={80}
        timeout={3000}
        visible={showComponent}
      />
    </Container>
  );
}
