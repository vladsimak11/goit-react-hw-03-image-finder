import css from './ImageGalleryItem.module.css';

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