import { Component } from 'react';
import css from './ImageGallery.module.css';
import {fetchImages} from '../../services/fetch';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import {Button} from '../Button/Button';
import {ThreeDots} from '../Loader/Loader';
import {Modal} from '../Modal/Modal'

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    currentPage: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.searchValue !== this.props.searchValue && this.props.searchValue) {
      this.getImages();
    } 
  }

  getImages = () => {
    this.setState({isLoading: true})
      fetchImages(this.props.searchValue, this.state.currentPage)
        .then(({hits}) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
          }))
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.setState({isLoading: false})
        });

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


  render() {
    const {images, isLoading, showModal, largeImageURL} = this.state;
    const checkLoadMore = images.length > 0;
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
          {checkLoadMore && <Button onClick={this.getImages}/>  }
          <div className={css.loader}>
            {isLoading && <ThreeDots /> }
          </div>
          </>
          )
        }
      </>
    )
  }
}