import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    valueQuery: '',
  }

  handleChange = ({target: {value}}) => {
    this.setState({
      valueQuery: value
    });
  }

  handleSumbit = (e) => {
    e.preventDefault();
    this.props.createSearchValue(this.state.valueQuery);
  }

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.handleSumbit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>
  
          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value = {this.state.valueQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}
