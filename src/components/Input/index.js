import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input ({ label }) {
  return (
    <Container>
      <input
        type="text"
        required="required"
        name={`input-${label}`}
      />
      <label
        htmlFor={`input-${label}`}
        className="control-label"
      >
        {label}
      </label>
      <i className="bar" />
    </Container>
  );
}

Input.defaultPropTypes = {
  label: ''
};

Input.propTypes = {
  label: PropTypes.string.isRequired
};

export default Input;
