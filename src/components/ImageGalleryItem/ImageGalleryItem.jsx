import css from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({images, getLargeImg}) => {
  return (
    images.map(({id , webformatURL, largeImageURL, user}) => {
      return (
        <li key={id} className={css.imageGalleryItem} onClick={() => getLargeImg(largeImageURL)}>
        <img src={webformatURL} alt={user} className={css.imageGalleryItemImage} />
      </li>
      )
    }) 
  )
}

ImageGalleryItem.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ),
  getLargeImg:propTypes.func.isRequired,
}