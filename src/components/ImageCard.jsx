import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaPlus } from 'react-icons/fa';
import { useFavoriteDispatch } from '../FavoriteContext';
import '../styles/ImageCard.css';

const ImageCard = ({ image }) => {
  const dispatchFavorite = useFavoriteDispatch();
  const handleAddToFavorite = () => {
    dispatchFavorite({ type: 'added', image });
    alert('added image to favorites');
  };
  return (
    <Card className="ImageCard">
      <div className="ImageCard__overlay"></div>
      <div className="ImageCard__btnContainer">
        <button className="ImageCard__btn" onClick={handleAddToFavorite}>
          <FaPlus color="white" />
        </button>
      </div>
      <Card.Img
        variant="top"
        src={image.urls.small}
        className="ImageCard__img"
      />
      <Card.Body className="ImageCard__body">
        <Card.Text>
          <a
            href={image.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="stretched-link"
          >
            {image.description || image.alt_description}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
