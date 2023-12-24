import React from 'react';
import Button from './Button';

export const PageModal = ({ images, index, setIndex, onClose }) => {
  if (!images || index == null) return null;

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="page-modal">
      <div className="page-modal-overlay" onClick={onClose}></div>
      <div className="page-modal-content">
        <Button primary={true} size={'small'} label={'Close'} onClick={onClose}></Button>
        <img src={images[index].url} alt={images[index].alt} className="page-modal-image" />
        <Button disabled={index === 0} primary={true} size={'small'} label={'Prev'} onClick={prevImage}></Button>
        <Button disabled={index === images.length - 1} primary={true} size={'small'} label={'Next'} onClick={nextImage}></Button>
      </div>
    </div>
  );
};

export default PageModal;