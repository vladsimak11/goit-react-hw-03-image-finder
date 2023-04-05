import { Component } from 'react';
import css from './ImageGallery.module.css';
import {getImage} from '../../services/fetch';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import {Button} from '../Button/Button';
import {ThreeDots} from '../Loader/Loader';
import {Modal} from '../Modal/Modal'

export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.searchValue !== this.props.searchValue && this.props.searchValue) {
      this.setState({isLoading: true})
      getImage(this.props.searchValue , this.state.page)
        .then(({hits}) => {
        this.setState({
          images: hits
        })
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.setState({isLoading: false})
        });
    }
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  getLargeImg = (image) => {
    this.setState({
      largeImageURL: image,
      showModal: true
    })
  }

  loadMore = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  render() {
    console.log(this.state.page);
    const {images, isLoading, showModal, largeImageURL} = this.state;
    return (
      <>
        {showModal && <Modal onClose = {this.toggleModal} >
          <img src={largeImageURL} alt=''/>
          </Modal>}
        {
          images && (
          <>
          <ul className={css.imageGallery}>
          <ImageGalleryItem images={images} getLargeImg={this.getLargeImg}/>
          </ul>
          <div className={css.loader}>
            {isLoading ? <ThreeDots /> : <Button loadMore={this.loadMore}/>  }
          </div>
          </>
          )
        }
      </>
    )
  }
}