import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ fetchRandom, fetchResults }) => {
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal !== '') {
      const inputString = inputVal.toString();
      fetchResults(inputString);
      setInputVal('');
    }
    return;
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="">Favorite Images API</Navbar.Brand>
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
          <Button variant="light" onClick={fetchRandom}>
            Random
          </Button>
          <Button
            variant="light"
            onClick={() =>
              alert('our dev team is working on adding logic for this action')
            }
          >
            Favorite
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
