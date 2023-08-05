import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import History from './History';

const Header = ({ addToHistory, fetchRandom, fetchResults, history }) => {
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal !== '') {
      const inputString = inputVal.toString();
      fetchResults(inputString);
      addToHistory(inputString);
      setInputVal('');
    }
    return;
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="">Image Search API</Navbar.Brand>
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
          <History
            placement="end"
            name="History"
            scroll={true}
            history={history}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
