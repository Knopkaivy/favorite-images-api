import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaCheck, FaPlus } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useFavoriteDispatch } from '../FavoriteContext';
import '../styles/ImageCard.css';

const ImageCard = ({ image }) => {
  const [done, setDone] = useState(false);
  const location = useLocation();
  const dispatchFavorite = useFavoriteDispatch();

  useEffect(() => {
    if (done) {
      setTimeout(() => {
        setDone(false);
      }, 1000);
    }
  }, [done]);
  const handleAddFavorite = (event) => {
    event.stopPropagation();
    dispatchFavorite({ type: 'added', image });
    setDone(true);
  };
  const handleRemoveFavorite = (event) => {
    event.stopPropagation();
    window.confirm('Remove image from Favorite?');
    dispatchFavorite({ type: 'removed', image });
    setDone(true);
  };
  return (
    <Card className="ImageCard" tabIndex={0} aria-label="image card">
      <div className="ImageCard__overlay" aria-hidden="true"></div>
      <div className="ImageCard__btnContainer">
        {location.pathname.includes('favorite') ? (
          <button
            className="ImageCard__btn"
            onClick={(e) => handleRemoveFavorite(e)}
            aria-label="remove this image from favorite"
          >
            <IoClose color="white" aria-hidden="true" />
          </button>
        ) : (
          <button
            className="ImageCard__btn"
            onClick={(e) => handleAddFavorite(e)}
            aria-label="add this image to favorite"
          >
            {done ? (
              <FaCheck color="white" aria-hidden="true" />
            ) : (
              <FaPlus color="white" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
      <a
        href={image.links.html}
        target="_blank"
        rel="noopener noreferrer"
        className="stretched-link"
        aria-label="open home location of image on Unsplash.com in a new tab"
      >
        <Card.Img
          variant="top"
          src={image.urls.small}
          className="ImageCard__img"
          alt={image.alt_description}
        />
        <Card.Body className="ImageCard__body" aria-hidden="true">
          <Card.Text className="ImageCard__description">
            {image.description || image.alt_description}
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default ImageCard;
