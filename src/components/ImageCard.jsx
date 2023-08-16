import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaCheck, FaPlus } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useFavoriteDispatch } from '../contexts/FavoriteContext';
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
    event.preventDefault();
    dispatchFavorite({ type: 'added', image });
    setDone(true);
  };
  const handleRemoveFavorite = (event) => {
    event.preventDefault();
    window.confirm('Remove image from Favorite?');
    dispatchFavorite({ type: 'removed', image });
    setDone(true);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (event.target.className === 'ImageCard__btn') {
        handleAddFavorite(event);
      } else {
        handleRemoveFavorite(event);
      }
    }
  };
  return (
    <Link
      to={image.links.html}
      target="_blank"
      rel="noopener noreferrer"
      className="ImageCard card mb-4"
      aria-label={`Image card. ${image.alt_description}. Open home location of image on Unsplash.com in a new tab`}
    >
      <div className="ImageCard__overlay" aria-hidden="true"></div>
      <div className="ImageCard__btnContainer">
        {location.pathname.includes('favorite') ? (
          <button
            id="btnRemove"
            className="ImageCard__btn"
            onClick={(e) => handleRemoveFavorite(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            aria-label="remove this image from favorite"
          >
            <IoClose color="white" aria-hidden="true" />
          </button>
        ) : (
          <button
            className="ImageCard__btn"
            onClick={(e) => handleAddFavorite(e)}
            onKeyDown={(e) => handleKeyDown(e)}
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
      <Card.Img
        variant="top"
        src={image.urls.small}
        loading="lazy"
        className="ImageCard__img"
        alt={image.alt_description}
      />
      <Card.Body className="ImageCard__body" aria-hidden="true">
        <Card.Text className="ImageCard__description">
          {image.description || image.alt_description}
        </Card.Text>
      </Card.Body>
    </Link>
  );
};

export default ImageCard;
