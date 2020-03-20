import React from 'react';
import PropTypes from 'prop-types';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from 'react-loader-spinner';
import { Container } from './styles';

function ProgressBar ({ visible }) {

  return (
    <Container>
      <Loader
        type="Oval"
        color="#d5171c"
        width={80}
        visible={visible}
      />
    </Container>
  );
}

ProgressBar.defaultProps = {
  visible: false
};

ProgressBar.propTypes = {
  visible: PropTypes.bool
};

export default ProgressBar;
