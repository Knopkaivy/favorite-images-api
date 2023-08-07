import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useSearch, useSearchDispatch } from '../SearchContext';
import { starterArr } from '../starterSearch';

const Header = () => {
  const [inputVal, setInputVal] = useState('');
  const search = useSearch();
  const dispatch = useSearchDispatch();

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal !== '') {
      const inputString = inputVal.toString();
      setInputVal('');
      dispatch({ type: 'updated', text: inputString });
    }
    return;
  };

  const handleRandomSearch = () => {
    const randomIndex = Math.floor(Math.random() * starterArr.length);
    const randomVal = starterArr[randomIndex];
    dispatch({ type: 'updated', text: randomVal });
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="">
          <Link to={`/`}>Favorite Images API</Link>
        </Navbar.Brand>
        <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={inputVal}
            onChange={(e) => handleInputChange(e)}
          />
          <Button variant="light" onClick={(e) => handleSubmit(e)}>
            Search
          </Button>
          <Button variant="light" onClick={handleRandomSearch}>
            Random
          </Button>
          <Button variant="light">
            <Link to={`favorite`}>Favorite</Link>
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
