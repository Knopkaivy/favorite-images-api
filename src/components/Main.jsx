import React, { useEffect, useRef, useState } from 'react';
import { createApi } from 'unsplash-js';
import { v4 as uuidv4 } from 'uuid';
import Masonry from 'react-masonry-css';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useSearch } from '../contexts/SearchContext';
import ImageCard from './ImageCard';
import { breakpointColumnsObj } from '../starters/masonryBreakPoints';
import '../styles/masonry.css';
import '../styles/Main.css';

const api = createApi({
  accessKey: process.env.REACT_APP_API_KEY,
});

const Main = () => {
  const observerTarget = useRef(null);
  const [data, setPhotosResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const search = useSearch();
  const perPage = 20;

  const fetchResults = async (q, action, p = page) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.search.getPhotos({
        query: q,
        page: p,
        perPage,
      });
      const responseData = response.response.results;
      if (action === 'add') {
        setPhotosResponse((prevItems) => [...prevItems, ...responseData]);
      } else {
        setPhotosResponse([...responseData]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPage(Math.floor(data.length / perPage) + 1);
  }, [data]);

  useEffect(() => {
    fetchResults(search, 'new', 1);
  }, [search]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchResults(search, 'add');
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, data]);

  const imageList = [];
  if (data.length > 0) {
    data.forEach((image) => {
      imageList.push(<ImageCard key={uuidv4()} image={image} />);
    });
  }
  return (
    <div className="Main">
      <Container>
        <h1 className="Main__heading h2 mb-4" tabIndex={0}>
          {search}
        </h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imageList}
          <div ref={observerTarget}></div>
        </Masonry>
        {isLoading && (
          <div className="Main__spinner">
            <Spinner
              animation="border"
              variant="secondary"
              role="status"
              className=""
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {error && <p>Error: {error.message}</p>}
      </Container>
    </div>
  );
};

export default Main;
