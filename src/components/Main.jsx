import React from 'react';
import Container from 'react-bootstrap/Container';
import Masonry from 'react-masonry-css';
import ImageCard from './ImageCard';
import '../styles/Main.css';

const Main = ({ data, history }) => {
  const imageList = [];
  if (data !== null) {
    data.forEach((image) => {
      imageList.push(<ImageCard key={image.id} image={image} />);
    });
  }
  return (
    <div className="Main">
      <Container>
        <h1 className="h2 mb-4">{history[0] && history[0]}</h1>
        <Masonry
          breakpointCols={4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imageList}
        </Masonry>
      </Container>
    </div>
  );
};

export default Main;
