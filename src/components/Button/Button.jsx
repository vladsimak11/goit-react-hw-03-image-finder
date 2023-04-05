import css from './Button.module.css';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button type="submit" className={css.button} onClick = {onClick}>
        Load more
    </button>
  )
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};