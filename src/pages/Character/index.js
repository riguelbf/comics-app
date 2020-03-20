import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

import Avatar from '../../components/Avatar';
import Input from '../../components/Input';

function Character () {
  return (
    <Wrapper>
      <header>
        <Avatar
          data-testid="header-character"
          name="Hulk"
          thumbnail={{
            path: "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5137710f56aa1",
            extension: "jpg"
          }}
        />
      </header>
      <form data-testid="form-character">
        <Input label="Text input 1" />
        <Input label="Text input 2" />
        <div className="button-container">
          <button type="button" className="button">
            <span>Submit</span>
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

Character.propTypes = {

};

export default Character;
