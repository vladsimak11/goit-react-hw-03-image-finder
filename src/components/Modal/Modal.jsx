import { Component } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if(e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleBackDropClick = e => {
    if(e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className={css.overlay} onClick = {this.handleBackDropClick}>
        <div className={css.modal}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: propTypes.node,
};
