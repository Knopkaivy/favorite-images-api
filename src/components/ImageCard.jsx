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
    <Card className="ImageCard">
      <div className="ImageCard__overlay"></div>
      <div className="ImageCard__btnContainer">
        {location.pathname.includes('favorite') ? (
          <button
            className="ImageCard__btn"
            onClick={(e) => handleRemoveFavorite(e)}
          >
            <IoClose color="white" />
          </button>
        ) : (
          <button
            className="ImageCard__btn"
            onClick={(e) => handleAddFavorite(e)}
          >
            {done ? <FaCheck color="white" /> : <FaPlus color="white" />}
          </button>
        )}
      </div>
      <a
        href={image.links.html}
        target="_blank"
        rel="noopener noreferrer"
        className="stretched-link"
      >
        <Card.Img
          variant="top"
          src={image.urls.small}
          className="ImageCard__img"
        />
        <Card.Body className="ImageCard__body">
          <Card.Text>{image.description || image.alt_description}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default ImageCard;
