import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="submit" className={css.button} onClick = {onClick}>
        Load more
    </button>
  )
}