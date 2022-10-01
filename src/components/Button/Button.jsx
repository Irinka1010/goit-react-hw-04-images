import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, Сontainer } from 'components/Button/StyledButton';
export default function Button({ changePage }) {
  return (
    <Сontainer>
      <ButtonStyled onClick={changePage} type="button">
        Load More
      </ButtonStyled>
    </Сontainer>
  );
}
Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};
