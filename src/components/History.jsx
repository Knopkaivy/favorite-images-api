import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const History = ({ history, name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const historyList = history.map((item, i) => {
    return <div key={i}>{item}</div>;
  });

  return (
    <>
      <Button variant="light" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search History</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{historyList}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default History;
