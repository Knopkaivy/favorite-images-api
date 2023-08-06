import React from 'react';
import Container from 'react-bootstrap/Container';
import Masonry from 'react-masonry-css';
import ImageCard from './ImageCard';
import '../styles/Main.css';

const Main = ({ data }) => {
  const breakpointColumnsObj = {
    default: 4,
    1380: 3,
    1000: 2,
    800: 1,
  };
  const imageList = [];
  if (data !== null) {
    data.forEach((image) => {
      imageList.push(<ImageCard key={image.id} image={image} />);
    });
  }
  return (
    <div className="Main">
      <Container>
        <h1 className="h2 mb-4">Header Placeholder</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
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
