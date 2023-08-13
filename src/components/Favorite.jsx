import React from 'react';
import Container from 'react-bootstrap/Container';
import Masonry from 'react-masonry-css';
import { useFavorite } from '../contexts/FavoriteContext';
import ImageCard from './ImageCard';
import { breakpointColumnsObj } from '../starters/masonryBreakPoints';
import '../styles/masonry.css';
import '../styles/Favorite.css';

const Favorite = () => {
  const favoriteArr = useFavorite();
  const imageList = [];
  if (favoriteArr.length > 0) {
    favoriteArr.forEach((image) => {
      imageList.push(<ImageCard key={image.id} image={image} />);
    });
  }
  return (
    <div className="Favorite">
      <Container>
        <h1 className="h2 mb-4">My Favorite Images</h1>
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

export default Favorite;
