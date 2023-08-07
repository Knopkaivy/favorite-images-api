import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import { useSearch } from '../SearchContext';
import Container from 'react-bootstrap/Container';
import Masonry from 'react-masonry-css';
import ImageCard from './ImageCard';
import { breakpointColumnsObj } from '../masonryBreakPoints';
import '../styles/masonry.css';
import '../styles/Main.css';

const api = createApi({
  accessKey: process.env.REACT_APP_API_KEY,
});

const Main = () => {
  const [data, setPhotosResponse] = useState(null);
  const search = useSearch();
  const fetchResults = async (q, p = 1) => {
    return await api.search
      .getPhotos({ query: q, page: p, perPage: 20 })
      .then((result) => {
        setPhotosResponse(result.response.results);
      })
      .catch((err) => {
        console.log('something went wrong!');
        console.error(err);
      });
  };

  useEffect(() => {
    fetchResults(search);
  }, [search]);

  const pageChange = (p) => {
    // TODO - removed logic with history, need to add new logic
    return;
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
        <h1 className="h2 mb-4">{search}</h1>
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
