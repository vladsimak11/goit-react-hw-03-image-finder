import css from './App.module.css';
import {Searchbar} from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Component } from 'react';

export class App extends Component {
  state = {
    getValueQuery: '',
  }

  createSearchValue = (getValueQuery) => {
    this.setState({
      getValueQuery: getValueQuery,
      });
  }

  render() {

    return (
      <div className={css.app}>
        <Searchbar createSearchValue={this.createSearchValue} />
        <ImageGallery searchValue={this.state.getValueQuery} />
      </div>
    );
  }
};
