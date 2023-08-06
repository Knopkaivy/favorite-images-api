import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/ImageCard.css';

const ImageCard = ({ image }) => {
  return (
    <Card className="ImageCard">
      <Card.Img
        variant="top"
        src={image.urls.small}
        className="ImageCard__img"
      />
      <Card.Body>
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
