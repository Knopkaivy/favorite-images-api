import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaPlus } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';
import { useFavoriteDispatch } from '../FavoriteContext';
import '../styles/ImageCard.css';

const ImageCard = ({ image }) => {
  const location = useLocation();
  const dispatchFavorite = useFavoriteDispatch();
  const handleAddFavorite = () => {
    dispatchFavorite({ type: 'added', image });
    alert('added image to favorites');
  };
  const handleRemoveFavorite = () => {
    // TODO: add prompt confirmation to proceed
    window.confirm('Proceed to remove?');
    dispatchFavorite({ type: 'removed', image });
  };
  return (
    <Card className="ImageCard">
      <div className="ImageCard__overlay"></div>
      <div className="ImageCard__btnContainer">
        {location.pathname.includes('favorite') ? (
          <button className="ImageCard__btn" onClick={handleRemoveFavorite}>
            <FiTrash color="white" />
          </button>
        ) : (
          <button className="ImageCard__btn" onClick={handleAddFavorite}>
            <FaPlus color="white" />
          </button>
        )}
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
