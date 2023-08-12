import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSearchDispatch } from '../SearchContext';
import { starterArr } from '../starterSearch';
import '../styles/Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');
  const dispatch = useSearchDispatch();

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    setExpanded(false);
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
    setExpanded(false);
    const randomIndex = Math.floor(Math.random() * starterArr.length);
    const randomVal = starterArr[randomIndex];
    dispatch({ type: 'updated', text: randomVal });
    if (location.pathname.includes('favorite')) {
      navigate('/');
    }
  };

  return (
    <Navbar
      expanded={expanded}
      className="Header"
      collapseOnSelect
      bg="light"
      expand="lg"
      fixed="top"
    >
      <Container className="Header__container">
        <Link to={`/`} className="navbar-brand px-2">
          Favorite Images API
        </Link>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="Header__collapse"
        >
          <Nav className="Header__nav">
            <Form
              className="Header__form d-flex"
              onSubmit={(e) => handleSubmit(e)}
            >
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
                className=" Header__btn"
              >
                Search
              </Button>
            </Form>
            <Button
              variant="light"
              onClick={handleRandomSearch}
              className="Header__btn"
            >
              Random
            </Button>
            <Link
              to={`favorite`}
              onClick={() => setExpanded(false)}
              className="Header__btn btn btn-light"
            >
              Favorite
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
