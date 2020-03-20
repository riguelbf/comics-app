import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';

function Input ({ name, label, value, ...rest }) {

  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input
        type="text"
        value={value}
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />
      <label
        htmlFor={`input-${fieldName}`}
      >
        {label}
      </label>
      <i />
    </Container>
  );
}

Input.defaultProps = {
  value: ''
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
