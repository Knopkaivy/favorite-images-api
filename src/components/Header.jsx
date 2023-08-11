import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useSearchDispatch } from '../SearchContext';
import { starterArr } from '../starterSearch';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');
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
      if (location.pathname.includes('favorite')) {
        navigate('/');
      }
    }
    return;
  };

  const handleRandomSearch = () => {
    const randomIndex = Math.floor(Math.random() * starterArr.length);
    const randomVal = starterArr[randomIndex];
    dispatch({ type: 'updated', text: randomVal });
    if (location.pathname.includes('favorite')) {
      navigate('/');
    }
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/* <Navbar.Brand href=""> */}
        <Link to={`/`} className="navbar-brand px-2">
          Favorite Images API
        </Link>
        {/* </Navbar.Brand>/ */}
        <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={inputVal}
            onChange={(e) => handleInputChange(e)}
          />
          <Button
            variant="light"
            onClick={(e) => handleSubmit(e)}
            className="mx-2"
          >
            Search
          </Button>
          <Button variant="light" onClick={handleRandomSearch} className="mx-2">
            Random
          </Button>
          <Link to={`favorite`} className="btn btn-light mx-2">
            Favorite
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
