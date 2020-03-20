import styled from 'styled-components';

export const Container = styled.div`

  position: relative;
  width: 100%;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;

  input {
    height: 1.9rem;
  }

  input::after,
  input::before {
    box-sizing: border-box;
  }

  label {
    position: absolute;
    top: 0.25rem;
    pointer-events: none;
    padding-left: 0.125rem;
    z-index: 1;
    color: #b3b3b3;
    font-size: 1rem;
    font-weight: normal;
    -webkit-transition: all 0.28s ease;
    transition: all 0.28s ease;
  }

  i {
    position: relative;
    border-bottom: 0.0625rem solid #999;
    display: block;
  }

    i:before {
    content: '';
    height: 0.125rem;
    width: 0;
    left: 50%;
    bottom: -0.0625rem;
    position: absolute;
    background: #d9181c;
    -webkit-transition: left 0.28s ease, width 0.28s ease;
    transition: left 0.28s ease, width 0.28s ease;
    /* z-index: 2; */
  }

  input {
    display: block;
    background: none;
    padding: 0.125rem 0.125rem 0.0625rem;
    font-size: 1rem;
    border-width: 0;
    border-color: transparent;
    line-height: 1.9;
    width: 100%;
    color: transparent;
    -webkit-transition: all 0.28s ease;
    transition: all 0.28s ease;
    box-shadow: none;
  }

  input[type="file"] {
    line-height: 1;
  }

  input[type="file"] ~ i {
    display: none;
  }

   input:focus,
   input:valid,
   input.form-file,
   input.has-value {
    color: #333;
  }

   input:focus ~ label,
   input:valid ~ label,
   input.form-file ~ label,
   input.has-value ~ label {
    font-size: 0.8rem;
    color: #d9534f;
    top: -1rem;
    left: 0;
  }

  input:focus{
    outline: none;
  }

  input:focus ~ i::before {
    width: 100%;
    left: 0;
  }

  .has-error.form-group .form-help,
  .has-error.form-group .helper {
    color: #d9534f;
  }
`;
